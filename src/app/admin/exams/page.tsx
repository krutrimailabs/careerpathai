import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import { getExams, createExam } from "@/actions/exams";

export default async function ExamsPage() {
  const exams = await getExams();

  return (
    <div className="space-y-6 p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Exams</h1>
          <p className="text-zinc-500 text-sm">Manage competitive exams.</p>
        </div>
        
        <form action={createExam} className="flex gap-2">
           <Input name="title" placeholder="Exam Title" required className="w-48" />
           <Input name="slug" placeholder="Slug" required className="w-32" />
           <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
             <Plus className="w-4 h-4 mr-2" />
             Add
           </Button>
        </form>
      </div>

      <div className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam: any) => (
              <TableRow key={exam.id}>
                <TableCell className="font-medium">{exam.title}</TableCell>
                <TableCell>{exam.slug}</TableCell>
                <TableCell>{new Date(exam.created_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
             {exams.length === 0 && (
                <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 text-zinc-500">
                        No exams found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
