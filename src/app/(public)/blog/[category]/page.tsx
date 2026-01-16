import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = BLOG_CATEGORIES.find(c => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const posts = BLOG_POSTS.filter(p => {
    // Basic normalization for mock data matching
    const postCatSlug = p.category.toLowerCase().replace(/\s+/g, '-');
    return postCatSlug === category.slug;
  });

  const getCategorySlug = (catName: string) => {
    return catName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-white border-b py-12">
         <div className="container mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Articles
           </Link>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{category.name}</h1>
            <p className="text-zinc-500">Curated insights and guides on {category.name}.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
               <Link key={post.id} href={`/blog/${getCategorySlug(post.category)}/${post.slug}`}>
                 <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer flex flex-col">
                    <div className="aspect-video bg-zinc-100 relative rounded-t-lg overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs">
                          {post.coverImage}
                       </div>
                    </div>
                    <CardContent className="p-6 flex-1">
                       <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                          <span className="text-xs text-zinc-400">{post.readTime}</span>
                       </div>
                       <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                         {post.title}
                       </h3>
                       <p className="text-zinc-500 text-sm line-clamp-3 mb-4">
                         {post.excerpt}
                       </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex items-center justify-between border-t bg-zinc-50/50 mt-auto">
                       <div className="flex items-center gap-2 pt-4">
                          <Avatar className="h-6 w-6">
                             <AvatarFallback className="text-[10px]">{post.author.avatar}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium text-zinc-600">{post.author.name}</span>
                       </div>
                       <span className="text-xs text-zinc-400 pt-4">{post.publishedAt}</span>
                    </CardFooter>
                 </Card>
               </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
             <div className="text-6xl mb-4">📭</div>
             <h3 className="text-xl font-bold text-zinc-900">No articles found</h3>
             <p className="text-zinc-500 mt-2">We haven&apos;t published anything in this category yet. Check back soon!</p>
             <Link href="/blog">
                <Button className="mt-6" variant="outline">View All Posts</Button>
             </Link>
          </div>
        )}
      </div>
    </div>
  );
}
