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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EditDialog } from "@/components/admin/EditDialog";
import { Plus, Search, Trash2, Star } from "lucide-react";
import { getMentors, createMentor, deleteMentor, verifyMentor, updateMentor } from "@/actions/mentors";

interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  experience: string;
  about: string;
  rating: number;
  image?: string;
  status: string;
  is_verified: boolean;
  created_at: string;
}

export default async function MentorsPage() {
  const mentors = await getMentors() as Mentor[];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mentor Verification Queue</h1>
          <p className="text-zinc-500 text-sm">Review credentials and approve mentor profiles.</p>
        </div>
        
        {/* Simple Add Form (Quick Implementation) */}
        <form action={createMentor} className="flex gap-2">
           <Input name="name" placeholder="Name" required className="w-32" />
           <Input name="role" placeholder="Role" required className="w-32" />
           <Input name="company" placeholder="Company" required className="w-32" />
           <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
             <Plus className="w-4 h-4 mr-2" />
             Add
           </Button>
        </form>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search mentors..." 
            className="pl-9 bg-zinc-50 border-zinc-200"
          />
        </div>
      </div>

      <div className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Mentor</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Company/Inst.</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mentors.map((mentor) => (
              <TableRow key={mentor.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.substring(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="font-medium">{mentor.name}</div>
                  </div>
                </TableCell>
                <TableCell>{mentor.role}</TableCell>
                <TableCell>{mentor.company}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{mentor.rating}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {/* Verification Action */}
                    {!mentor.is_verified && (
                        <form action={verifyMentor.bind(null, mentor.id)}>
                            <Button type="submit" variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                                Verify
                            </Button>
                        </form>
                    )}
                    <EditDialog item={mentor} type="mentor" action={updateMentor} />
                    <form action={deleteMentor.bind(null, mentor.id)}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                        </Button>
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {mentors.length === 0 && (
                <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-zinc-500">
                        No mentors found. Add one above.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
