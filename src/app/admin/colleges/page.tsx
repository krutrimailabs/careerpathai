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
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreVertical, Edit, Trash } from "lucide-react";

export default function CollegesPage() {
  const colleges = [
    { id: 1, name: "Indian Institute of Technology, Bombay", location: "Mumbai, MH", type: "Public", ranking: "#3", status: "Active" },
    { id: 2, name: "Delhi Technological University", location: "New Delhi, DL", type: "Public", ranking: "#8", status: "Active" },
    { id: 3, name: "Bits Pilani", location: "Pilani, RJ", type: "Private", ranking: "#5", status: "Active" },
    { id: 4, name: "Vellore Institute of Technology", location: "Vellore, TN", type: "Private", ranking: "#12", status: "Draft" },
    { id: 5, name: "Anna University", location: "Chennai, TN", type: "Public", ranking: "#15", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Colleges</h1>
          <p className="text-zinc-500 text-sm">Manage colleges, courses, and fees data.</p>
        </div>
        <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add College
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search colleges..." 
            className="pl-9 bg-zinc-50 border-zinc-200"
          />
        </div>
      </div>

      <div className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">College Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Ranking</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colleges.map((college) => (
              <TableRow key={college.id}>
                <TableCell className="font-medium">{college.name}</TableCell>
                <TableCell>{college.location}</TableCell>
                <TableCell>{college.type}</TableCell>
                <TableCell>{college.ranking}</TableCell>
                <TableCell>
                  <Badge variant={college.status === 'Active' ? 'default' : 'secondary'} className={college.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}>
                    {college.status}
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
