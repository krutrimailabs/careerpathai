import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { GROUPS } from '@/data/community';

export default function GroupsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Student Groups</h1>
            <p className="text-zinc-500">Find your tribe. Connect with like-minded students.</p>
          </div>
          <Button variant="outline">Create Group</Button>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROUPS.map((group) => (
             <Card key={group.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                   <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border">
                      {group.image}
                   </div>
                   <CardTitle>{group.name}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-zinc-500 mb-4 h-10">{group.desc}</p>
                   <div className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-600 bg-zinc-50 py-2 rounded-lg">
                      <Users className="w-4 h-4" /> {group.members} Members
                   </div>
                </CardContent>
                <CardFooter>
                   <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Group</Button>
                </CardFooter>
             </Card>
          ))}
       </div>
    </div>
  );
}
