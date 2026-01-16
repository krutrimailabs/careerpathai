import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog';

export default async function BlogPostPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  
  const category = BLOG_CATEGORIES.find(c => c.slug === categorySlug);
  if (!category) {
    notFound(); 
  }

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20">
      <div className="bg-zinc-50 border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
           <Link href={`/blog/${categorySlug}`} className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to {category.name}
           </Link>
           
           <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{post.category}</Badge>
              <span className="text-sm text-zinc-500 flex items-center gap-1">
                 <Clock className="w-4 h-4" /> {post.readTime}
              </span>
           </div>

           <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
             {post.title}
           </h1>

           <div className="flex items-center justify-between border-t border-zinc-200 pt-6 mt-6">
              <div className="flex items-center gap-4">
                 <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarFallback>{post.author.avatar}</AvatarFallback>
                 </Avatar>
                 <div>
                    <div className="font-bold text-zinc-900">{post.author.name}</div>
                    <div className="text-sm text-zinc-500">{post.author.role}</div>
                 </div>
              </div>
              <div className="flex gap-2">
                 <Button variant="ghost" size="icon"><Share2 className="w-4 h-4" /></Button>
                 <Button variant="ghost" size="icon"><Bookmark className="w-4 h-4" /></Button>
              </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-12">
         {/* Cover Image Placeholder */}
         <div className="aspect-video bg-zinc-100 rounded-xl mb-12 flex items-center justify-center text-zinc-400">
            {post.coverImage}
         </div>

         <div className="prose prose-blue prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
         </div>

         <div className="mt-12 pt-8 border-t">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
               {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1">{tag}</Badge>
               ))}
            </div>
         </div>
      </div>
    </article>
  );
}
