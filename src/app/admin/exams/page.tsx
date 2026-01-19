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
import { EditDialog } from "@/components/admin/EditDialog";
import { Trash2, Plus } from "lucide-react";
import { getExams, createExam, deleteExam, updateExam } from "@/actions/exams";

interface Exam {
  id: string;
  title: string;
  slug: string;
  created_at: string;
}

export default async function ExamsPage() {
  const exams = await getExams() as Exam[];

  return (
    <div className="space-y-6 p-8">
      {/* ... (Header and Add Form remain) */}
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
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {exams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell className="font-medium">{exam.title}</TableCell>
                <TableCell>{exam.slug}</TableCell>
                <TableCell>{new Date(exam.created_at).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <EditDialog item={exam} type="exam" action={updateExam} />
                    <form action={deleteExam.bind(null, exam.id)}>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            ))}
             {exams.length === 0 && (
                <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-zinc-500">
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
