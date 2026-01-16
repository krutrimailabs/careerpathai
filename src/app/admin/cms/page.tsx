import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Edit2, Plus, Trash2 } from 'lucide-react';
import { CMS_POSTS } from '@/data/admin';

export default function CMSPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
         <h1 className="text-3xl font-bold">Content Management</h1>
         <div className="flex gap-4">
            <Input placeholder="Search posts..." className="w-64" />
            <Button><Plus className="w-4 h-4 mr-2" /> Create New Post</Button>
         </div>
      </div>

      <Card>
         <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
         </CardHeader>
         <CardContent>
            <div className="rounded-md border">
               <table className="w-full text-sm text-left">
                  <thead className="bg-zinc-50 border-b">
                     <tr>
                        <th className="p-4 font-medium text-zinc-500">Title</th>
                        <th className="p-4 font-medium text-zinc-500">Author</th>
                        <th className="p-4 font-medium text-zinc-500">Date</th>
                        <th className="p-4 font-medium text-zinc-500">Status</th>
                        <th className="p-4 font-medium text-zinc-500 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y">
                     {CMS_POSTS.map((post) => (
                        <tr key={post.id} className="hover:bg-zinc-50/50">
                           <td className="p-4 font-medium">{post.title}</td>
                           <td className="p-4 text-zinc-600">{post.author}</td>
                           <td className="p-4 text-zinc-500">{post.date}</td>
                           <td className="p-4">
                              <Badge variant={post.status === 'Published' ? 'default' : 'secondary'} className={post.status === 'Published' ? 'bg-green-600' : ''}>
                                 {post.status}
                              </Badge>
                           </td>
                           <td className="p-4 text-right">
                              <div className="flex justify-end gap-2">
                                 <Button variant="ghost" size="icon"><Edit2 className="w-4 h-4 text-zinc-500" /></Button>
                                 <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-500" /></Button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
