import React from 'react';
import { createClient } from '@/utils/supabase/server';
import { BookingModal } from '@/components/mentors/BookingModal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function MentorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: mentor, error } = await supabase
    .schema('careerpath')
    .from('mentors')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !mentor) {
      notFound();
  }

  // Fetch similar mentors (just random others for now)
  const { data: similarMentors } = await supabase
    .schema('careerpath')
    .from('mentors')
    .select('id, name, role, company, company_logo')
    .neq('id', id)
    .limit(3);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans pb-20">
        
        {/* 1. PROFILE HERO */}
        <div className="bg-white border-b border-zinc-200 pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Avatar */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-200 border-4 border-white shadow-xl overflow-hidden shrink-0">
                         <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center font-bold text-4xl text-[#002147]">
                              {mentor.name[0]}
                         </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h1 className="text-3xl md:text-4xl font-black text-[#002147]">{mentor.name}</h1>
                            {mentor.rating >= 4.9 && <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-0">Top Rated Mentor</Badge>}
                        </div>
                        <p className="text-xl text-zinc-600 font-medium mb-4">{mentor.role} at <span className="text-[#002147] font-bold">{mentor.company}</span></p>
                        
                        <div className="flex flex-wrap gap-6 text-sm text-zinc-500 font-medium mb-6">
                            <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> {mentor.experience || 'N/A'} Exp</div>
                            <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> {mentor.education}</div>
                            <div className="flex items-center gap-2 text-orange-600 font-bold"><Star className="w-4 h-4 fill-current" /> {mentor.rating} ({mentor.reviews} Reviews)</div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {mentor.expertise?.map((skill: string) => (
                                <Badge key={skill} variant="secondary" className="bg-zinc-100 text-zinc-600">{skill}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex flex-col gap-3">
                         <BookingModal mentorName={mentor.name}>
                             <Button className="w-full md:w-64 h-12 text-lg font-bold bg-[#FF9900] hover:bg-orange-600 shadow-lg text-white">
                                 Book Session @ ₹{mentor.hourly_rate}
                             </Button>
                         </BookingModal>
                         <Button variant="outline" className="w-full md:w-64 font-bold border-zinc-300">
                             Save to Wishlist
                         </Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* LEFT: About & Services */}
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-[#002147] mb-4">About Me</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed">{mentor.about}</p>
                        <p className="mt-4 text-zinc-600">
                            I have mentored over {mentor.reviews * 2} students and professionals in the past 2 years. 
                            My sessions are actionable, data-driven, and focused on getting results. 
                            Whether you need help with your resume, mock interviews, or just clarity on your career path, I am here to help.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#002147] mb-4">What I can help you with</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="border-zinc-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" /> Resume Review
                                    </h3>
                                    <p className="text-sm text-zinc-500">Deep dive into your CV to make it ATS compliant and standout.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-zinc-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" /> Mock Interview
                                    </h3>
                                    <p className="text-sm text-zinc-500">Real-world interview simulation with detailed feedback.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-zinc-200">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" /> Career Strategy
                                    </h3>
                                    <p className="text-sm text-zinc-500">Long-term planning for your next big career move.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </div>

                {/* RIGHT: Similar Mentors */}
                <aside className="space-y-6">
                    <h3 className="text-xl font-bold text-[#002147]">Similar Mentors</h3>
                    <div className="space-y-4">
                        {similarMentors?.map((m: { id: string; name: string; role: string; company: string; company_logo?: string }) => (
                            <Link href={`/mentors/${m.id}`} key={m.id}>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-200 hover:shadow-md transition-all mb-3 cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-[#002147] text-sm shrink-0">
                                        {m.name[0]}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-sm text-[#002147] truncate">{m.name}</h4>
                                        <p className="text-xs text-zinc-500 truncate">{m.role} @ {m.company}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>

    </div>
  );
}
