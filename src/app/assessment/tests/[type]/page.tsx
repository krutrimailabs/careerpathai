import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import { AVAILABLE_TESTS } from '@/data/assessment';

export default async function TestLandingPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const test = AVAILABLE_TESTS.find(t => t.type === type);

  if (!test) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-20">
      <Card className="max-w-2xl w-full mx-4 shadow-xl">
         <CardContent className="p-0">
            <div className="bg-blue-600 p-12 text-center text-white rounded-t-xl">
               <h1 className="text-3xl font-bold mb-4">{test.title}</h1>
               <p className="text-blue-100 text-lg">{test.description}</p>
            </div>
            
            <div className="p-12">
               <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="text-center p-6 bg-zinc-50 rounded-xl">
                     <Clock className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                     <div className="font-bold text-xl">{test.time}</div>
                     <div className="text-sm text-zinc-500">Duration</div>
                  </div>
                  <div className="text-center p-6 bg-zinc-50 rounded-xl">
                     <HelpCircle className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                     <div className="font-bold text-xl">{test.questions}</div>
                     <div className="text-sm text-zinc-500">Questions</div>
                  </div>
               </div>

               <div className="space-y-4 mb-12">
                  <h3 className="font-bold text-zinc-900 mb-4">What to expect:</h3>
                  <div className="flex items-center gap-3 text-zinc-600">
                     <Check className="w-5 h-5 text-green-500 shrink-0" />
                     <span>No right or wrong answers, just be honest.</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600">
                     <Check className="w-5 h-5 text-green-500 shrink-0" />
                     <span>Get instant detailed analysis report.</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-600">
                     <Check className="w-5 h-5 text-green-500 shrink-0" />
                     <span>Find careers that truly match your potential.</span>
                  </div>
               </div>

               <Link href="/assessment">
                   {/* In a real app, this would modify state to start the specific test */}
                  <Button className="w-full h-14 text-lg gap-2">
                     Start Assessment <ArrowRight className="w-5 h-5" />
                  </Button>
               </Link>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
