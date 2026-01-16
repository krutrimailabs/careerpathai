import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.text();
  
  // 1. Verify Stripe Signature
  // const sig = req.headers.get('stripe-signature');
  
  // 2. Handle Event (checkout.session.completed)
  // if (event.type === 'checkout.session.completed') {
  //    Update `careerpath.subscriptions` table
  // }

  console.log('Stripe Webhook received');

  return NextResponse.json({ received: true });
}
