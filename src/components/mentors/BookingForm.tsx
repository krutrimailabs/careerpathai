'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, CreditCard, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
// Mock slots for now
const MENTOR_SLOTS = [
  { date: '2026-02-10', slots: ['10:00 AM', '02:00 PM', '04:00 PM'] },
  { date: '2026-02-11', slots: ['11:00 AM', '03:00 PM'] },
  { date: '2026-02-12', slots: ['09:00 AM', '05:00 PM'] },
];

interface BookingFormProps {
  mentor: {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    hourly_rate: number;
  };
}

export function BookingForm({ mentor }: BookingFormProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    const handleConfirm = () => {
        alert(`Booking Confirmed!\nSession with ${mentor.name} scheduled for ${selectedSlot}.`);
        // Here we would ideally call an API to save to careerpath.mentor_bookings
    };

    return (
        <div className="min-h-screen bg-zinc-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                 <Link href={`/mentors/${mentor.id}`} className="inline-flex items-center text-zinc-500 hover:text-blue-600 mb-6 font-medium">
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
