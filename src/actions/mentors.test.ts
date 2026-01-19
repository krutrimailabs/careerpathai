import { createMentor } from './mentors';
import { vi, describe, it, expect, beforeEach } from 'vitest';

const mocks = vi.hoisted(() => {
  return {
    mockUpload: vi.fn(),
    mockGetPublicUrl: vi.fn(),
    mockInsert: vi.fn(),
    mockSelect: vi.fn(),
    mockEq: vi.fn(),
    mockSingle: vi.fn(),
    mockAuthGetUser: vi.fn(),
  };
});

// Mock createClient
vi.mock('@/utils/supabase/server', () => {
    return {
      createClient: () => {
        return Promise.resolve({
          auth: {
            getUser: mocks.mockAuthGetUser,
          },
          from: (table: string) => ({
            select: (cols: string) => {
              mocks.mockSelect(table, cols);
              return {
                eq: (col: string, val: string) => {
                  mocks.mockEq(col, val);
                  return {
                    single: () => {
                      mocks.mockSingle();
                      return { data: { role: 'admin' }, error: null };
                    },
                  };
                },
                insert: mocks.mockInsert,
              };
            },
            insert: mocks.mockInsert,
          }),
          storage: {
            from: () => ({
              upload: mocks.mockUpload,
              getPublicUrl: mocks.mockGetPublicUrl,
            }),
          },
        });
      },
    };
});


// Mock revalidatePath
vi.mock('next/cache', () => ({
  revalidatePath: vi.fn(),
}));

describe('createMentor Server Action', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('uploads image and creates mentor record', async () => {
    // Setup Mocks
    mocks.mockAuthGetUser.mockResolvedValue({ data: { user: { id: 'admin-id' } } });
    mocks.mockUpload.mockResolvedValue({ data: { path: 'some/path' }, error: null });
    mocks.mockGetPublicUrl.mockReturnValue({ data: { publicUrl: 'https://fake-url.com/image.png' } });
    mocks.mockInsert.mockResolvedValue({ error: null });

    // Create FormData
    const formData = new FormData();
    formData.append('name', 'Test Mentor');
    formData.append('role', 'Senior Dev');
    formData.append('company', 'Tech Corp');
    formData.append('experience', '10 years');
    formData.append('about', 'About info');
    
    // Use standard File construction. JSDOM supports it.
    // Ensure size is present in case it's checked
    const imageFile = new File(['content'], 'profile.png', { type: 'image/png' });
    const logoFile = new File(['content'], 'logo.png', { type: 'image/png' });
    
    formData.append('image', imageFile);
    formData.append('company_logo', logoFile);

    // Call Action
    await createMentor(formData);

    // Verify Uploads
    expect(mocks.mockUpload).toHaveBeenCalledTimes(2); // Profile + Logo
    
    // Verify Insert
    expect(mocks.mockInsert).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Test Mentor',
      image: 'https://fake-url.com/image.png',
      company_logo: 'https://fake-url.com/image.png',
    }));
  });
});
