import { render, screen, fireEvent } from '@testing-library/react';
import { EditDialog } from './EditDialog';
import { vi, describe, it, expect } from 'vitest';

// Mock the action prop
const mockAction = vi.fn();

// Mock RichTextEditor to avoid complex rendering in dialog test
vi.mock('./RichTextEditor', () => ({
  RichTextEditor: () => <div data-testid="rich-text-editor">Editor</div>
}));

// Mock Dialog components (Radix UI) can be tricky in JSDOM without proper setup (ResizeObserver etc).
// We might need to mock the entire Dialog component or ensure necessary polyfills.
// Simpler approach: Check if inputs render when Dialog is open. 
// However, Radix Dialog renders in a Portal.
// Let's try to mock the specific Dialog parts to just render children immediately,
// OR render the full thing and see.

// Polyfill for ResizeObserver which is often needed by Radix
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe('EditDialog', () => {
  it('renders file inputs for Mentor type', async () => {
    const item = { id: '1', name: 'John Doe', role: 'Dev', company: 'Google' };
    render(<EditDialog item={item} type="mentor" action={mockAction} />);
    
    // Open the dialog
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    // Wait for dialog content
    const profileImageInput = await screen.findByText('Profile Image'); // Label
    expect(profileImageInput).toBeTruthy();
    
    // Find input by name
    // Inputs might be hidden or styled opacity 0, but standard inputs are usually visible or accessible.
    // The Input component renders a standard <input>.
    // Let's look for the label's associated control or just query by selector if needed.
    // But testing-library prefers accessible queries.
    
    // Note: The helper text "Profile Image" is a label.
    // The input is inside a div.
    
    // Let's query by container.
    const fileInputs = document.querySelectorAll('input[type="file"]');
    // We expect 2: image and company_logo for Mentor
    expect(fileInputs.length).toBe(2);
  });

  it('renders file inputs for College type', async () => {
    const item = { id: '1', name: 'College A', slug: 'college-a', city: 'City', state: 'State' };
    render(<EditDialog item={item} type="college" action={mockAction} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    await screen.findByText('Logo'); // Label
    
    // We expect 2: logo and hero_image
    const fileInputs = document.querySelectorAll('input[type="file"]');
    expect(fileInputs.length).toBe(2);
  });
});
