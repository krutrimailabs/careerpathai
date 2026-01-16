'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export function CollegeFilter() {
  return (
    <div className="md:w-72 shrink-0">
        <div className="sticky top-24">
            <Card className="border-zinc-200 shadow-sm">
                <CardHeader className="pb-3 border-b border-zinc-100">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Filters</CardTitle>
                        <Button variant="ghost" size="sm" className="text-xs text-red-500 hover:text-red-600 h-auto p-0 hover:bg-transparent">Clear All</Button>
                    </div>
                </CardHeader>
                <ScrollArea className="h-[calc(100vh-200px)]">
                    <CardContent className="space-y-6 pt-6">
                        {/* 1. Location */}
                        <Accordion type="single" collapsible defaultValue="location" className="w-full">
                            <AccordionItem value="location" className="border-0">
                                <AccordionTrigger className="py-2 text-sm font-bold hover:no-underline">Location</AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-3 pt-2">
                                        {['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai'].map(city => (
                                            <div key={city} className="flex items-center space-x-2">
                                                <Checkbox id={city} />
                                                <label htmlFor={city} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-600">
                                                    {city}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        
                        {/* 2. Streams - Expanded by default */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-bold">Stream</h4>
                            <div className="space-y-3">
                                {['Engineering', 'Management', 'Medical', 'Science', 'Arts'].map(stream => (
                                    <div key={stream} className="flex items-center space-x-2">
                                        <Checkbox id={stream} />
                                        <label htmlFor={stream} className="text-sm font-medium leading-none text-zinc-600">
                                            {stream}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                         {/* 3. Fees Range */}
                         <div className="space-y-4">
                            <h4 className="text-sm font-bold">Annual Fees</h4>
                            <Slider defaultValue={[200000]} max={1000000} step={50000} className="w-full" />
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>₹0</span>
                                <span>₹10L+</span>
                            </div>
                        </div>
                        
                        {/* 4. Ownership */}
                         <div className="space-y-3">
                            <h4 className="text-sm font-bold">Ownership</h4>
                            {['Private', 'Government', 'Public-Private'].map(type => (
                                <div key={type} className="flex items-center space-x-2">
                                    <Checkbox id={type} />
                                    <label htmlFor={type} className="text-sm font-medium leading-none text-zinc-600">
                                        {type}
                                    </label>
                                </div>
                            ))}
                        </div>

                    </CardContent>
                </ScrollArea>
                <div className="p-4 border-t border-zinc-100">
                    <Button className="w-full bg-[#002147] hover:bg-blue-900">Apply Filters</Button>
                </div>
            </Card>
        </div>
    </div>
  );
}
