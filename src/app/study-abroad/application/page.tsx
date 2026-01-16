import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { APP_GUIDES } from '@/data/study-abroad';

export default function ApplicationGuidePage() {
  const steps = [
    { num: '01', title: 'Shortlist Universities', desc: 'Research and pick 8-10 universities based on your profile.' },
    { num: '02', title: 'Take Exams', desc: 'Complete GRE/GMAT and IELTS/TOEFL at least 6 months before.' },
    { num: '03', title: 'Prepare Documents', desc: 'Write SOPs, get LORs, and update your resume.' },
    { num: '04', title: 'Submit Applications', desc: 'Apply via university portals before deadlines.' },
    { num: '05', title: 'Visa Process', desc: 'Once accepted, apply for your student visa immediately.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
       <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Application Roadmap</h1>
          <p className="text-xl text-zinc-500">Your step-by-step timeline to studying abroad.</p>
       </div>

       {/* Timeline */}
       <div className="mb-20">
          <div className="grid md:grid-cols-5 gap-4">
             {steps.map((step) => (
                <div key={step.num} className="bg-zinc-50 p-6 rounded-xl border relative group hover:border-blue-300 transition-colors">
                   <div className="text-4xl font-black text-zinc-200 mb-4 group-hover:text-blue-100 transition-colors">{step.num}</div>
                   <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                   <p className="text-sm text-zinc-500">{step.desc}</p>
                </div>
             ))}
          </div>
       </div>

       <h2 className="text-2xl font-bold mb-8">Detailed Guides</h2>
       <div className="grid md:grid-cols-3 gap-8">
          {APP_GUIDES.map((guide) => (
             <Card key={guide.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8">
                   <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                      <FileText className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">{guide.title}</h3>
                   <p className="text-zinc-500 mb-6">{guide.desc}</p>
                   <Button variant="link" className="p-0 h-auto text-green-600">Read Article &rarr;</Button>
                </CardContent>
             </Card>
          ))}
       </div>
    </div>
  );
}
