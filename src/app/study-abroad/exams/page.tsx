import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXAMS } from '@/data/study-abroad';

export default function StudyAbroadExamsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">International Entrance Exams</h1>
          <p className="text-zinc-500">
             Most global universities require standardized test scores. Here&apos;s what you need to prepare for.
          </p>
       </div>

       <div className="grid md:grid-cols-3 gap-8">
          {EXAMS.map((exam) => (
             <Card key={exam.slug} className="flex flex-col">
                <CardHeader>
                   <div className="flex justify-between items-start mb-4">
                      <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
                         {exam.name.substring(0, 1)}
                      </div>
                      <Badge variant="outline">{exam.type}</Badge>
                   </div>
                   <CardTitle className="text-2xl">{exam.name}</CardTitle>
                   <p className="text-sm text-zinc-500">{exam.fullForm}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                   <p className="text-zinc-600">{exam.description}</p>
                   
                   <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                         <span className="text-zinc-500">Exam Fee</span>
                         <span className="font-semibold">{exam.fee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-zinc-500">Validity</span>
                         <span className="font-semibold">{exam.validity}</span>
                      </div>
                   </div>
                </CardContent>
                <CardFooter>
                   <Button className="w-full" variant="outline">View Syllabus & Dates</Button>
                </CardFooter>
             </Card>
          ))}
       </div>
    </div>
  );
}
