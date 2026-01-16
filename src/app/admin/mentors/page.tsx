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
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash, Star } from "lucide-react";

export default function MentorsPage() {
  const mentors = [
    { id: 1, name: "Dr. Anjali Gupta", role: "Career Counselor", company: "Self-Employed", rating: 4.8, status: "Active" },
    { id: 2, name: "Rajesh Kumar", role: "Software Engineer", company: "Google", rating: 4.9, status: "Active" },
    { id: 3, name: "Priya Sharma", role: "MBA Graduate", company: "IIM Ahmedabad", rating: 4.7, status: "Pending" },
    { id: 4, name: "Amit Patel", role: "Data Scientist", company: "Microsoft", rating: 4.5, status: "Active" },
    { id: 5, name: "Sneha Reddy", role: "Product Manager", company: "Uber", rating: 4.9, status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mentors</h1>
          <p className="text-zinc-500 text-sm">Manage mentor profiles and approvals.</p>
        </div>
        <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Mentor
        </Button>
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
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mentors.map((mentor) => (
              <TableRow key={mentor.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`/avatars/${mentor.id}.png`} alt={mentor.name} />
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
                <TableCell>
                  <Badge variant={mentor.status === 'Active' ? 'default' : 'secondary'} className={mentor.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}>
                    {mentor.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-blue-600">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-red-600">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
