import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { job_context, conversation_json, feedback_summary, detailed_scores, avg_score } = body;

    // Validate required fields (basic check)
    if (!conversation_json) {
        return NextResponse.json({ error: 'Missing conversation data' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('mock_interviews')
      .insert({
        user_id: user.id,
        job_context: job_context || 'General Interview',
        conversation_json,
        feedback_summary,
        detailed_scores: detailed_scores || {},
        avg_score: avg_score || 0
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving interview:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
