'use client';

import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, CreditCard, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { MENTORS, MENTOR_SLOTS } from '@/data/mentors';

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrapping params for Next.js 15 compatibility
  // In a real client component we might need `use` hook or await in parent. 
  // Since this is a client component receiving a promise prop in Next 15, we can't await it directly in top level.
  // Actually, for client components in Next 15, params is not a promise, it is a promise in Server Components.
  // But let's assume standard Next.js 14/15 behavior where it might be passed down.
  // Wait, if this is 'use client', params are usually available directly OR unwrapped.
  // Let's stick to a safe approach: this page should probably be a Server Component that passes data to a Client Component,
  // OR we strictly handle it. For now, let's treat it as a Client Component that might receive params differently?
  // Actually, in app router `page.tsx` is server by default unless 'use client' is top.
  // I will make the main page server-side to fetch mentor, then a client component for the form.
    
  // Refactoring to Server Component + Client Form pattern is cleaner, but to keep it simple in one file:
  // "Page props are Promises in Next.js 15".
  
  return <BookingClient params={params} />;
}

function BookingClient({ params }: { params: Promise<{ id: string }> }) {
  // We need to unwrap params. In React 19/Next 15 we can use `use(params)`.
  // For compatibility/safety, let's handle it with a simple state or useEffect if strictly needed,
  // but let's try the `use` hook pattern if available, or just await in a server wrapper (which I did above but failed to implement there).
  
  // Let's go with the valid Next.js pattern: Main component is Server, awaits params, passes to Client.
  
  // WAIT: I cannot make the default export 'use client' AND async.
  // So I will convert the DEFAULT export to be a Server Component (async), and import a client component.
  // But since I am writing to ONE file, I have to put the client component in the same file? No, 'use client' implies module boundary.
  
  // Hack: standard simple client component in `page.tsx`. Next.js 15 might complain about async params.
  // Let's assume params is standard object for now or I handle it.
  
  // Actually, easiest way: 
  // `export default async function Page({params}: ...)` -> Server Component.
  // Inside, `<BookingForm mentor={mentor} />` -> Client Component.
  // I will write TWO files or just one Server Component that renders a client component if interactive.
  
  // Let's write the CLIENT logic in a separate component file if possible, or use the "Server Page renders Client Component" pattern but inline if I can't create new files easily? I can create new files.
  
  // Strategy: `page.tsx` is Server. It fetches data and renders a client component `BookingForm`.
  // I'll create `src/app/mentors/book/[id]/booking-form.tsx` first? No, too many files.
  
  // I will stick to 'use client' for the whole page for simplicity, but I need to handle the `params` promise.
  // I will use `use` from React if available, or just `await` in a wrapper? No.
  
  // Correct Next 15 Client Page:
  // `export default function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = use(params); ... }`
  // But `use` import might be tricky if not set up.
  
  // Let's fallback to `useEffect` unwrap or just standard prop passing if standard Next 14.
  // Assuming Next 14/15 compat: The user's repo seems to be Next 15 based on previous logs (params.slug awaited).
  // So I MUST await params.
  
    return <WrappedBookingPage params={params} />;
}

import { useState, use } from 'react';

function WrappedBookingPage({ params }: { params: Promise<{ id: string }> }) {
    // In Next 15, we can use `use` to unwrap the promise in a client component
    const { id } = use(params); 
    
    // ... logic
    const mentor = MENTORS.find(m => m.id === id);

    if (!mentor) {
        notFound();
    }
    
    // State
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    const handleConfirm = () => {
        alert(`Booking Confirmed!\nSession with ${mentor.name} scheduled for ${selectedSlot}.`);
    };

    return (
        <div className="min-h-screen bg-zinc-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                 <Link href={`/mentors/${id}`} className="inline-flex items-center text-zinc-500 hover:text-blue-600 mb-6 font-medium">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Profile
                 </Link>

                 <div className="grid md:grid-cols-3 gap-8">
                    {/* Booking Form */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Select a Time</CardTitle>
                            <CardDescription>Choose a date and time for your 1:1 session.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="border rounded-lg p-4">
                                   {/* Mock Calendar with minimal interactivity */}
                                   <div className="font-bold text-center mb-4">February 2026</div>
                                   <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                      {['S','M','T','W','T','F','S'].map(d => <div key={d} className="text-zinc-400">{d}</div>)}
                                      <div className="p-2"></div><div className="p-2"></div>
                                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(d => (
                                          <button 
                                            key={d} 
                                            onClick={() => setDate(new Date(2026, 1, d))}
                                            className={`p-2 rounded-full w-8 h-8 flex items-center justify-center transition-colors
                                                ${d === 10 || d === 11 || d === 12 ? 'bg-blue-100 text-blue-600 font-bold hover:bg-blue-200' : 'text-zinc-600 hover:bg-zinc-100'}
                                                ${date?.getDate() === d ? 'ring-2 ring-blue-600' : ''}
                                            `}
                                          >
                                            {d}
                                          </button>
                                      ))}
                                   </div>
                                </div>
                                
                                <div className="flex-1">
                                    <h4 className="font-bold mb-4">Available Slots</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {MENTOR_SLOTS[0].slots.map(slot => (
                                            <Button 
                                                key={slot} 
                                                variant={selectedSlot === slot ? "default" : "outline"}
                                                onClick={() => setSelectedSlot(slot)}
                                                className="w-full"
                                            >
                                                {slot}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Summary */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle>Booking Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={mentor.image} />
                                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold">{mentor.name}</div>
                                    <div className="text-sm text-zinc-500">{mentor.role}</div>
                                </div>
                            </div>
                            
                            <div className="border-t pt-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500 flex items-center"><Clock className="w-4 h-4 mr-2" /> Duration</span>
                                    <span className="font-medium">60 Mins</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500 flex items-center"><CreditCard className="w-4 h-4 mr-2" /> Price</span>
                                    <span className="font-medium">₹{mentor.hourly_rate}</span>
                                </div>
                            </div>

                            <Button className="w-full" size="lg" disabled={!selectedSlot} onClick={handleConfirm}>
                                Confirm & Pay ₹{mentor.hourly_rate}
                            </Button>
                            <p className="text-xs text-center text-zinc-400">Secure payment via Stripe/Razorpay</p>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </div>
    );
}
