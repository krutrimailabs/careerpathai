import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Clock } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function BlogListingPage() {
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1);

  // Helper to normalize category slugs
  const getCategorySlug = (catName: string) => {
    return catName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-white border-b py-12">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">CareerPath.AI Blog</h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Expert advice, exam strategies, and career insights to help you make informed decisions.
            </p>
            
            <div className="mt-8 flex justify-center gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <Link key={cat.id} href={cat.id === 'all' ? '/blog' : `/blog/${cat.slug}`}>
                  <Badge variant="secondary" className="hover:bg-blue-100 cursor-pointer px-4 py-2 text-sm rounded-full">
                    {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>

            <div className="mt-8 relative max-w-md mx-auto">
               <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
               <Input placeholder="Search articles..." className="pl-10 h-11" />
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-16">
           <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
           <Link href={`/blog/${getCategorySlug(featuredPost.category)}/${featuredPost.slug}`}>
             <div className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border hover:shadow-md transition-all grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-zinc-200 relative min-h-[300px]">
                   <div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-100">
                      Cover Image: {featuredPost.coverImage}
                   </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                   <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-blue-600 hover:bg-blue-700">{featuredPost.category}</Badge>
                      <span className="text-sm text-zinc-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {featuredPost.readTime}
                      </span>
                   </div>
                   <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                     {featuredPost.title}
                   </h3>
                   <p className="text-zinc-600 text-lg mb-6 line-clamp-3">
                     {featuredPost.excerpt}
                   </p>
                   <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{featuredPost.author.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{featuredPost.author.name}</div>
                        <div className="text-xs text-zinc-500">{featuredPost.author.role}</div>
                      </div>
                   </div>
                </div>
             </div>
           </Link>
        </div>

        {/* Recent Posts Grid */}
        <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
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
      </div>
    </div>
  );
}
