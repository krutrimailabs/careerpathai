import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, DollarSign, GraduationCap, MapPin } from 'lucide-react';

export default function CountryDetailPage() {
  // Mock data for USA - in real app would use [slug]
  return (
    <div className="min-h-screen bg-zinc-50 pb-20">
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🇺🇸</span>
            <h1 className="text-4xl font-bold">Study in USA</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl">
            Home to Ivy League institutions and global tech hubs, the USA offers unparalleled academic flexibility and career opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="overview">
                  <TabsList className="mb-6 w-full justify-start">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="universities">Top Universities</TabsTrigger>
                    <TabsTrigger value="cost">Cost & Visa</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Why Study in USA?</h3>
                      <ul className="space-y-3">
                        {[
                          "World's top-ranked universities (MIT, Harvard, Stanford)",
                          "Flexible curriculum with Major/Minor options",
                          "OPT (Optional Practical Training) allows working for up to 3 years",
                          "Diverse cultural exposure and networking"
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3 text-zinc-700">
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-blue-600 font-bold text-lg">Intakes</div>
                        <div className="text-zinc-600">Fall (Aug) & Spring (Jan)</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-blue-600 font-bold text-lg">Avg Salary</div>
                        <div className="text-zinc-600">$60,000 - $120,000</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold">Top Universities</h2>
            <div className="space-y-4">
              {[
                { name: "Massachusetts Institute of Technology (MIT)", loc: "Cambridge, MA", rank: "#1" },
                { name: "Stanford University", loc: "Stanford, CA", rank: "#3" },
                { name: "Harvard University", loc: "Cambridge, MA", rank: "#5" }
              ].map((uni, i) => (
                <Card key={i}>
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{uni.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-zinc-500 mt-1">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {uni.loc}</span>
                        <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> World Rank: {uni.rank}</span>
                      </div>
                    </div>
                    <Button variant="outline">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="font-bold text-lg border-b pb-4">Key Facts</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-zinc-500">Cost of Education/Year</div>
                    <div className="font-medium flex items-center gap-2">
                       <DollarSign className="w-4 h-4" /> $30,000 - $60,000
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Living Expenses/Year</div>
                    <div className="font-medium flex items-center gap-2">
                       <DollarSign className="w-4 h-4" /> $12,000 - $20,000
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Work Rights</div>
                    <div className="font-medium">20 hrs/week (Part-time)</div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Talk to Counselor</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
