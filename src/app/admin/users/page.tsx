import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-zinc-500">Manage students, parents, and administrative access.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
            <Button>Export CSV</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
           <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input placeholder="Search by name or email..." className="pl-9" />
           </div>
        </CardHeader>
        <CardContent>
            <div className="text-center py-12 text-zinc-500">
                User list will appear here. Connect to `supabase.auth` / `profiles` table.
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
