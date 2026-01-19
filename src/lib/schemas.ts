import { z } from 'zod';

export const CollegeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  logo_url: z.string().optional(),
  hero_image_url: z.string().optional(),
});

export const ExamSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
});

export const PostSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  status: z.enum(['draft', 'published']).default('draft'),
});

export const CategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
});

export const MentorSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  experience: z.string().optional(),
  about: z.string().optional(),
  image: z.string().optional(),
  company_logo: z.string().optional(),
});
