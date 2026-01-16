'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Clock, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function BookingModal({ children, mentorName }: { children: React.ReactNode, mentorName: string }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const timeSlots = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM"];

  const handleBook = () => {
    setStep(2);
    // In real app, API call here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white">
          <div className="bg-[#002147] p-6 text-white text-center">
              <h2 className="text-xl font-bold mb-1">Book Session with {mentorName}</h2>
              <p className="text-blue-200 text-sm">Select a convenient time slot</p>
          </div>

          <div className="p-6">
              {step === 1 ? (
                  <div className="space-y-6">
                      <div className="flex justify-center">
                          <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              className="rounded-md border shadow-sm"
                          />
                      </div>

                      <div>
                          <h4 className="font-bold text-zinc-700 mb-3 flex items-center gap-2">
                              <Clock className="w-4 h-4" /> Available Slots
                          </h4>
                          <div className="grid grid-cols-3 gap-2">
                              {timeSlots.map(t => (
                                  <Button 
                                      key={t} 
                                      variant={time === t ? "default" : "outline"}
                                      className={time === t ? "bg-[#002147] text-white" : "border-zinc-200"}
                                      onClick={() => setTime(t)}
                                  >
                                      {t}
                                  </Button>
                              ))}
                          </div>
                      </div>

                      <Button 
                          className="w-full bg-[#FF9900] hover:bg-orange-600 font-bold h-12 text-lg" 
                          disabled={!date || !time}
                          onClick={handleBook}
                      >
                          Confirm Booking
                      </Button>
                  </div>
              ) : (
                  <div className="text-center py-10 space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold text-[#002147] mb-2">Booking Confirmed!</h3>
                          <p className="text-zinc-500 max-w-xs mx-auto">
                              We have sent a calendar invite to your email. Get ready for your session on <b>{date?.toLocaleDateString()} at {time}</b>.
                          </p>
                      </div>
                      <Button className="w-full" variant="outline" onClick={() => setStep(1)}>Close</Button>
                  </div>
              )}
          </div>
      </DialogContent>
    </Dialog>
  );
}
