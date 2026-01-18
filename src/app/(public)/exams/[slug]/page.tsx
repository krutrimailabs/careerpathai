import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Download, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';
import { Exam } from '@/types/exam';

export default async function ExamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: examData } = await supabase
    .schema('careerpath')
    .from('exams')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!examData) {
    notFound();
  }

  const exam: Exam = {
      id: examData.id,
      slug: examData.slug,
      title: examData.title,
      category: examData.category,
      date: examData.exam_date,
      applicationDeadline: examData.application_deadline,
      description: examData.description,
      eligibility: examData.eligibility,
      syllabus: (examData.syllabus as unknown) as Exam['syllabus'] || [],
      prepMaterials: (examData.prep_materials as unknown) as Exam['prepMaterials'] || [],
      notifications: (examData.notifications as unknown) as Exam['notifications'] || []
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b py-12">
        <div className="container mx-auto px-4 max-w-5xl">
           <Link href="/exams" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Calendar
           </Link>
           
           <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                 <Badge className="mb-4">{exam.category}</Badge>
                 <h1 className="text-4xl font-bold mb-4">{exam.title}</h1>
                 <div className="flex flex-wrap gap-6 text-zinc-600">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-5 h-5 text-blue-600" />
                       <span className="font-semibold">Date: {exam.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <AlertCircle className="w-5 h-5 text-orange-500" />
                       <span>Deadline: {exam.applicationDeadline}</span>
                    </div>
                 </div>
              </div>
              <div className="flex flex-col gap-3 min-w-[200px]">
                 <Button size="lg" className="w-full">Register Now</Button>
                 <Button variant="outline" className="w-full">Download Syllabus</Button>
              </div>
           </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 max-w-5xl py-12">
         <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
               <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-4 px-6">Overview</TabsTrigger>
               <TabsTrigger value="syllabus" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-4 px-6">Syllabus</TabsTrigger>
               <TabsTrigger value="prep" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent py-4 px-6">Preparation Material</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
               <Card>
                  <CardHeader>
                     <CardTitle>About the Exam</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-zinc-600 leading-relaxed text-lg">{exam.description}</p>
                  </CardContent>
               </Card>
               
               <Card>
                  <CardHeader>
                     <CardTitle>Eligibility Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-zinc-600">{exam.eligibility}</p>
                  </CardContent>
               </Card>

               {exam.notifications.length > 0 && (
                 <Card>
                    <CardHeader>
                       <CardTitle>Recent Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="space-y-4">
                          {exam.notifications.map((note, i) => (
                             <div key={i} className="flex gap-4 p-4 bg-zinc-50 rounded-lg border">
                                <div className="font-bold text-zinc-900 whitespace-nowrap">{note.date}</div>
                                <div className="text-zinc-600">{note.message}</div>
                             </div>
                          ))}
                       </div>
                    </CardContent>
                 </Card>
               )}
            </TabsContent>

            <TabsContent value="syllabus" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
               <div className="grid md:grid-cols-2 gap-6">
                  {exam.syllabus.map((subject, i) => (
                     <Card key={i}>
                        <CardHeader>
                           <CardTitle className="text-xl text-blue-700">{subject.subject}</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                              {subject.topics.map((topic, j) => (
                                 <li key={j}>{topic}</li>
                              ))}
                           </ul>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </TabsContent>

            <TabsContent value="prep" className="animate-in fade-in slide-in-from-bottom-2">
               <Card>
                  <CardHeader>
                     <CardTitle>Study Materials & Mock Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="space-y-4">
                        {exam.prepMaterials.map((material, i) => (
                           <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="flex items-center gap-4">
                                 <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-5 h-5" />
                                 </div>
                                 <div>
                                    <div className="font-semibold text-zinc-900">{material.title}</div>
                                    <div className="text-xs text-zinc-500 uppercase">{material.type}</div>
                                 </div>
                              </div>
                              <Button variant="ghost" size="sm" className="text-blue-600">
                                 {material.type === 'Link' ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                                 <span className="ml-2 hidden sm:inline">{material.type === 'Link' ? 'Open' : 'Download'}</span>
                              </Button>
                           </div>
                        ))}
                     </div>
                  </CardContent>
               </Card>
            </TabsContent>
         </Tabs>
      </div>
    </div>
  );
}
