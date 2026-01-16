import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { INTERACTIVE_TOOLS } from '@/data/resources';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-12">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Interactive Tools</h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
               Smart utilities to help you plan, calculate, and optimize your career journey.
            </p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERACTIVE_TOOLS.map((tool) => (
               <Link href={tool.link} key={tool.id}>
                  <Card className="h-full hover:shadow-lg transition-all hover:border-blue-200 group relative overflow-hidden">
                     {tool.badge && (
                        <div className="absolute top-4 right-4">
                           <Badge className={tool.badge === 'New' ? 'bg-blue-600' : 'bg-orange-500'}>
                              {tool.badge}
                           </Badge>
                        </div>
                     )}
                     <CardHeader>
                        <div className="h-12 w-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                           <tool.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{tool.title}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-zinc-500 mb-6 line-clamp-2">
                           {tool.description}
                        </p>
                        <Button variant="ghost" className="p-0 text-zinc-900 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                           Try Tool &rarr;
                        </Button>
                     </CardContent>
                  </Card>
               </Link>
            ))}
         </div>
         
         <div className="mt-20 text-center bg-blue-50 rounded-2xl p-12">
            <h2 className="text-2xl font-bold mb-4">Need a specific tool?</h2>
            <p className="text-zinc-600 mb-6">
               We are constantly building new utilities. Let us know what would assist you the most.
            </p>
            <Button>Request a Tool</Button>
         </div>
      </div>
    </div>
  );
}
