import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText,PenTool } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Resource Center</h1>
        <p className="text-xl text-zinc-500">
          Everything you need to plan your career. Guides, tools, webinars, and more.
        </p>
        <div className="mt-8 relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
          <Input placeholder="Search for guides, articles..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 h-auto p-1">
          <TabsTrigger value="all" className="py-2">All</TabsTrigger>
          <TabsTrigger value="blogs" className="py-2">Articles</TabsTrigger>
          <TabsTrigger value="guides" className="py-2">Guides</TabsTrigger>
          <TabsTrigger value="webinars" className="py-2">Webinars</TabsTrigger>
          <TabsTrigger value="tools" className="py-2">Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          {/* Featured Guides */}
          <section>
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <FileText className="h-6 w-6 text-blue-600" /> Latest Guides
             </h2>
             <div className="grid md:grid-cols-3 gap-6">
               {[
                 { title: 'Stream Selection Guide 2024', cat: 'Class 10', color: 'bg-purple-100 text-purple-700' },
                 { title: 'The Complete JEE Roadmap', cat: 'Engineering', color: 'bg-orange-100 text-orange-700' },
                 { title: 'Studying in Germany: A Handbook', cat: 'Study Abroad', color: 'bg-blue-100 text-blue-700' }
               ].map((guide, i) => (
                 <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                   <div className="h-40 bg-zinc-100 rounded-t-lg flex items-center justify-center">
                     <FileText className="h-12 w-12 text-zinc-300" />
                   </div>
                   <CardContent className="p-6">
                     <span className={`text-xs font-bold px-2 py-1 rounded-full ${guide.color}`}>{guide.cat}</span>
                     <h3 className="font-bold text-lg mt-3 mb-2">{guide.title}</h3>
                     <p className="text-sm text-zinc-500 mb-4">Detailed step-by-step walkthrough covering everything you need to know.</p>
                     <Button variant="link" className="p-0 text-blue-600">Read Guide →</Button>
                   </CardContent>
                 </Card>
               ))}
             </div>
          </section>

          {/* Tools Grid */}
          <section>
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
               <PenTool className="h-6 w-6 text-blue-600" /> Free Tools
             </h2>
             <div className="grid md:grid-cols-4 gap-6">
                {[
                  { name: "Resume Builder", icon: FileText, desc: "Create ATS-friendly resumes" },
                  { name: "ROI Calculator", icon: DollarSignIcon, desc: "Compare college returns" },
                  { name: "Stream Selector", icon: PenTool, desc: "Find your perfect stream" },
                  { name: "Scholarship Finder", icon: Search, desc: "Search 500+ scholarships" }
                ].map((tool, i) => (
                  <Card key={i} className="hover:border-blue-200 transition-colors cursor-pointer">
                    <CardHeader>
                      <tool.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription className="text-xs">{tool.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
             </div>
          </section>
        </TabsContent>
        {/* Other tabs would simply filter the above or show specific content */}
      </Tabs>
    </div>
  );
}

function DollarSignIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
