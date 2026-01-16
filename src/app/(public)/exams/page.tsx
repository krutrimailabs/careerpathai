import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, ArrowRight, Bell } from 'lucide-react';
import { EXAMS } from '@/data/exams';

export default function ExamsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
           <h1 className="text-4xl font-bold mb-2">Exam Calendar 2026</h1>
           <p className="text-xl text-zinc-500">Track important dates and deadlines.</p>
        </div>
        <Button variant="outline" className="gap-2">
           <Bell className="w-4 h-4" /> Get Exam Alerts
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         {EXAMS.map((exam) => (
             <Card key={exam.id} className="hover:shadow-lg transition-all border-l-4 border-l-blue-600">
                <CardHeader>
                   <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{exam.category}</Badge>
                      <span className="text-xs font-bold text-red-500 px-2 py-1 bg-red-50 rounded-full">
                         {new Date(exam.date) < new Date() ? 'Completed' : 'Upcoming'}
                      </span>
                   </div>
                   <CardTitle className="text-2xl">{exam.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-center gap-3 text-zinc-600">
                      <CalendarIcon className="w-5 h-5 text-blue-600" />
                      <div>
                         <div className="text-sm font-semibold">Exam Date</div>
                         <div>{exam.date}</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 text-zinc-600">
                      <div className="w-5 h-5 rounded-full border-2 border-orange-400 flex items-center justify-center text-[10px] font-bold text-orange-500">!</div>
                      <div>
                         <div className="text-sm font-semibold">Deadline</div>
                         <div>{exam.applicationDeadline}</div>
                      </div>
                   </div>
                   
                   {exam.notifications.length > 0 && (
                      <div className="bg-zinc-50 p-3 rounded-lg text-sm">
                         <div className="font-semibold text-zinc-900 mb-1">Latest Update:</div>
                         <div className="text-zinc-600">{exam.notifications[exam.notifications.length - 1].message}</div>
                      </div>
                   )}
                </CardContent>
                <CardFooter>
                   <Link href={`/exams/${exam.slug}`} className="w-full">
                      <Button className="w-full gap-2">
                         View Details <ArrowRight className="w-4 h-4" />
                      </Button>
                   </Link>
                </CardFooter>
             </Card>
         ))}
      </div>
    </div>
  );
}
