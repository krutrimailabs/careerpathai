'use server';

import OpenAI from 'openai';
import { createClient } from '@/utils/supabase/server';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateContent(
  prompt: string, 
  contextData: Record<string, unknown> = {}
) {
  // 1. Auth Check (Admin Only)
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthorized');

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    throw new Error('Forbidden: Admin access required');
  }

  // 2. Load System Guidelines
  const guidelinesPath = path.join(process.cwd(), 'src', 'lib', 'ai', 'CONTENT_GUIDELINES.md');
  let systemPrompt = '';
  try {
    systemPrompt = fs.readFileSync(guidelinesPath, 'utf-8');
  } catch (err) {
    console.error('Failed to load content guidelines:', err);
    systemPrompt = 'You are a helpful assistant.'; // Fallback
  }

  // 3. Construct Context Message
  const contextMessage = `
    CONTEXT DATA (JSON):
    ${JSON.stringify(contextData, null, 2)}
  `;

  // 4. Call OpenAI
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Cost-effective model for high-quality content generation
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'system', content: contextMessage },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7, // Balance between creativity and fact adherence
    });

    return { 
      content: response.choices[0]?.message?.content || '', 
      error: null 
    };
  } catch (error: unknown) {
    console.error('AI Generation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { 
      content: null, 
      error: errorMessage || 'Failed to generate content' 
    };
  }
}
