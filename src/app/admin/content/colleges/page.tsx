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
import { getColleges, createCollege, deleteCollege, updateCollege } from "@/actions/colleges";

interface College {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
}

export default async function CollegesPage() {
  const colleges = await getColleges() as College[];

  return (
    <div className="space-y-6 p-8">
      {/* ... (Header and Add Form remain the same) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">College Database & ROI</h1>
          <p className="text-zinc-500 text-sm">Manage college fees, placements, and calculate Safety/ROI scores.</p>
        </div>
        
        <form action={createCollege} className="flex gap-2">
           <Input name="name" placeholder="Name" required className="w-48" />
           <Input name="slug" placeholder="Slug" required className="w-32" />
           <Input name="city" placeholder="City" required className="w-32" />
           <Input name="state" placeholder="State" required className="w-32" />
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
              <TableHead>College Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colleges.map((college) => (
              <TableRow key={college.id}>
                <TableCell className="font-medium">{college.name}</TableCell>
                <TableCell>{college.slug}</TableCell>
                <TableCell>{college.city}, {college.state}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <EditDialog item={college} type="college" action={updateCollege} />
                    <form action={deleteCollege.bind(null, college.id)}>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            ))}
             {colleges.length === 0 && (
                <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-zinc-500">
                        No colleges found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
