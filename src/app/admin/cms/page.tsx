import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Trash2 } from 'lucide-react';
import { getPosts, createPost, deletePost } from '@/actions/cms';

export default async function CMSPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
         <h1 className="text-3xl font-bold">Content Management</h1>
         
         <form action={createPost} className='flex gap-2'>
             <Input name="title" placeholder="Post Title" required className='w-64'/>
             <Input name="slug" placeholder="Slug" required className='w-48'/>
             <Button type="submit"><Plus className="w-4 h-4 mr-2" /> Create Post</Button>
         </form>
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
                        <th className="p-4 font-medium text-zinc-500">Slug</th>
                        <th className="p-4 font-medium text-zinc-500">Date</th>
                        <th className="p-4 font-medium text-zinc-500">Status</th>
                        <th className="p-4 font-medium text-zinc-500 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y">
                     {posts.map((post: any) => (
                        <tr key={post.id} className="hover:bg-zinc-50/50">
                           <td className="p-4 font-medium">{post.title}</td>
                           <td className="p-4 text-zinc-600">{post.slug}</td>
                           <td className="p-4 text-zinc-500">{new Date(post.created_at).toLocaleDateString()}</td>
                           <td className="p-4">
                              <Badge variant={post.status === 'published' ? 'default' : 'secondary'} className={post.status === 'published' ? 'bg-green-600' : ''}>
                                 {post.status}
                              </Badge>
                           </td>
                           <td className="p-4 text-right">
                              <div className="flex justify-end gap-2">
                                 <form action={deletePost.bind(null, post.id)}>
                                     <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-500" /></Button>
                                 </form>
                              </div>
                           </td>
                        </tr>
                     ))}
                     {posts.length === 0 && (
                        <tr>
                            <td colSpan={5} className="p-4 text-center text-zinc-500">No posts found.</td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
