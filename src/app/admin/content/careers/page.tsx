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
import { getPaths, createPath } from "@/actions/paths";

interface CareerPath {
  id: string;
  title: string;
  slug: string;
  category: string;
}

export default async function PathsPage() {
  const paths = await getPaths() as CareerPath[];

  return (
    <div className="space-y-6 p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Career Library & Roadmaps</h1>
          <p className="text-zinc-500 text-sm">Manage 500+ career paths and map out roadmaps (Class 10 to Job).</p>
        </div>
        
        <form action={createPath} className="flex gap-2 items-end">
           <div>
             <Input name="title" placeholder="Title" required className="w-48 mb-2" />
             <Input name="slug" placeholder="Slug" required className="w-48" />
           </div>
           <div>
             <Input name="category" placeholder="Category" required className="w-32 mb-2" />
             <textarea name="roadmap" placeholder='Roadmap JSON' className="flex h-10 w-48 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
           </div>
           <Button type="submit" className="bg-blue-600 hover:bg-blue-700 h-10">
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
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paths.map((path) => (
              <TableRow key={path.id}>
                <TableCell className="font-medium">{path.title}</TableCell>
                <TableCell>{path.slug}</TableCell>
                <TableCell>{path.category}</TableCell>
                <TableCell className="text-right">
                 <a href={`/admin/content/careers/${path.slug}`} className="text-blue-600 hover:underline text-sm mr-4">
                    Edit AI Logic
                 </a>
                </TableCell>
              </TableRow>
            ))}
             {paths.length === 0 && (
                <TableRow>
                    <TableCell colSpan={3} className="text-center py-8 text-zinc-500">
                        No paths found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
