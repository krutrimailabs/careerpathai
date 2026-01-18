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
    const { interview_id, avg_score, feedback_summary, detailed_scores } = body;

    if (!interview_id) {
        return NextResponse.json({ error: 'Missing interview ID' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('mock_interviews')
      .update({
        avg_score,
        feedback_summary,
        detailed_scores
      })
      .eq('id', interview_id)
      .eq('user_id', user.id) // Security check to ensure ownership
      .select()
      .single();

    if (error) {
      console.error('Error finalizing interview:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
