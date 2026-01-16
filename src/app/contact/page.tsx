'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans pb-20">
      
      {/* 1. HERO SECTION */}
      <div className="bg-[#002147] text-white py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
             <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Get in Touch</h1>
             <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                 Have questions about your career path? We&apos;re here to help you navigate through the confusion.
             </p>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* 2. CONTACT INFO CARD (Left Sidebar) */}
              <div className="lg:col-span-1 space-y-6">
                  <Card className="shadow-xl border-0 bg-[#002147] text-white">
                      <CardHeader>
                          <CardTitle className="text-2xl font-bold">Contact Info</CardTitle>
                          <CardDescription className="text-zinc-300">Reach out to us directly.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                          <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                  <MapPin className="w-5 h-5 text-[#FF9900]" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg">Our Office</h4>
                                  <p className="text-zinc-300 text-sm leading-relaxed mt-1">
                                      Plot No. 42, Tech Park,<br/>
                                      Viman Nagar, Pune, India - 411014
                                  </p>
                              </div>
                          </div>

                          <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                  <Mail className="w-5 h-5 text-[#FF9900]" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg">Email Us</h4>
                                  <p className="text-zinc-300 text-sm mt-1">support@careerpath.ai</p>
                                  <p className="text-zinc-300 text-sm">careers@careerpath.ai</p>
                              </div>
                          </div>

                          <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                  <Phone className="w-5 h-5 text-[#FF9900]" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg">Call Us</h4>
                                  <p className="text-zinc-300 text-sm mt-1">+91 98765 43210</p>
                                  <p className="text-zinc-400 text-xs mt-1">Mon-Fri, 9am - 6pm</p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>

                  {/* Trust Badge */}
                  <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                          <h4 className="font-bold text-zinc-900">Live Chat</h4>
                          <p className="text-xs text-zinc-500">Available 24/7 for quick queries.</p>
                      </div>
                  </div>
              </div>

              {/* 3. CONTACT FORM (Main Content) */}
              <div className="lg:col-span-2">
                  <Card className="shadow-lg border-zinc-100 h-full">
                      <CardHeader>
                          <CardTitle className="text-2xl font-bold text-[#002147]">Send us a message</CardTitle>
                          <CardDescription>Fill out the form below and our team will get back to you within 24 hours.</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <form className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label htmlFor="name" className="text-sm font-medium text-zinc-700">Full Name</label>
                                      <Input id="name" placeholder="John Doe" className="h-12 bg-zinc-50 border-zinc-200" />
                                  </div>
                                  <div className="space-y-2">
                                      <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                                      <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-zinc-50 border-zinc-200" />
                                  </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label htmlFor="phone" className="text-sm font-medium text-zinc-700">Phone Number</label>
                                      <Input id="phone" placeholder="+91 99999 99999" className="h-12 bg-zinc-50 border-zinc-200" />
                                  </div>
                                  <div className="space-y-2">
                                      <label htmlFor="subject" className="text-sm font-medium text-zinc-700">Subject</label>
                                      <Input id="subject" placeholder="Admission Inquiry" className="h-12 bg-zinc-50 border-zinc-200" />
                                  </div>
                              </div>

                              <div className="space-y-2">
                                  <label htmlFor="message" className="text-sm font-medium text-zinc-700">Message</label>
                                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-zinc-50 border-zinc-200 resize-none" />
                              </div>

                              <Button className="w-full md:w-auto bg-[#FF9900] hover:bg-orange-600 text-white font-bold h-12 px-8 text-lg">
                                  Send Message <Send className="w-4 h-4 ml-2" />
                              </Button>
                          </form>
                      </CardContent>
                  </Card>
              </div>
          </div>

          {/* 4. FAQ SECTION */}
          <div className="mt-20 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-[#002147] mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="item-1" className="border border-zinc-200 rounded-lg px-4 bg-white shadow-sm">
                      <AccordionTrigger className="text-left font-bold text-zinc-800 hover:no-underline">How do I book a session with a mentor?</AccordionTrigger>
                      <AccordionContent className="text-zinc-600 pb-4">
                          You can browse our list of mentors on the Mentors page, filter by expertise, and book a slot directly using the calendar interface.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border border-zinc-200 rounded-lg px-4 bg-white shadow-sm">
                      <AccordionTrigger className="text-left font-bold text-zinc-800 hover:no-underline">Is the career assessment free?</AccordionTrigger>
                      <AccordionContent className="text-zinc-600 pb-4">
                          Yes, the basic career assessment is completely free. We also offer a detailed premium report with personalized college recommendations.
                      </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border border-zinc-200 rounded-lg px-4 bg-white shadow-sm">
                      <AccordionTrigger className="text-left font-bold text-zinc-800 hover:no-underline">Can I apply to colleges directly through CareerPath?</AccordionTrigger>
                      <AccordionContent className="text-zinc-600 pb-4">
                          Yes, for partner universities, you can use our &quot;One-Click Apply&quot; feature to submit your application directly from the college profile page.
                      </AccordionContent>
                  </AccordionItem>
              </Accordion>
          </div>
      </div>
    </div>
  );
}
