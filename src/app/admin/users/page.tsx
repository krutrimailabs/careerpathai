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
import { Search, Edit, Trash, Shield, User } from "lucide-react";

export default function UsersPage() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", joined: "Jan 12, 2024" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Student", joined: "Jan 15, 2024" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Parent", joined: "Feb 01, 2024" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", role: "Student", joined: "Feb 03, 2024" },
    { id: 5, name: "David Lee", email: "david@example.com", role: "Mentor", joined: "Feb 05, 2024" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users</h1>
          <p className="text-zinc-500 text-sm">Manage user accounts and permissions.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline">Export CSV</Button>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input 
            placeholder="Search users..." 
            className="pl-9 bg-zinc-50 border-zinc-200"
          />
        </div>
      </div>

      <div className="border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                        {user.name.substring(0,2).toUpperCase()}
                     </div>
                     {user.name}
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {user.role === 'Admin' && <Shield className="w-3 h-3 text-purple-600" />}
                    {user.role === 'Student' && <User className="w-3 h-3 text-blue-600" />}
                    <span>{user.role}</span>
                  </div>
                </TableCell>
                <TableCell>{user.joined}</TableCell>
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
