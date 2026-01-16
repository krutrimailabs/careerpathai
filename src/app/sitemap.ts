import { MetadataRoute } from 'next';
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nextcareer.in";

  // Fetch all careers and colleges
  const { data: careers } = await supabase.schema('careerpath').from('careers').select('slug, created_at');
  const { data: colleges } = await supabase.schema('careerpath').from('colleges').select('slug, created_at');

  const careerUrls = (careers || []).map((c) => ({
    url: `${baseUrl}/careers/${c.slug}`,
    lastModified: new Date(c.created_at || Date.now()),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const collegeUrls = (colleges || []).map((c) => ({
    url: `${baseUrl}/colleges/${c.slug}`,
    lastModified: new Date(c.created_at || Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    ...careerUrls,
    ...collegeUrls,
  ];
}
