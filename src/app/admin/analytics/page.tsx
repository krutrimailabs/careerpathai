import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp } from 'lucide-react';
import { ANALYTICS_DATA, ADMIN_STATS } from '@/data/admin';

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
         <h1 className="text-3xl font-bold">Platform Analytics</h1>
         <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export Report</Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
         {ADMIN_STATS.map((stat) => (
            <Card key={stat.label}>
               <CardContent className="p-6 flex items-center justify-between">
                  <div>
                     <p className="text-sm font-medium text-zinc-500 mb-1">{stat.label}</p>
                     <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                     {stat.change}
                  </div>
               </CardContent>
            </Card>
         ))}
      </div>

      {/* Charts Area */}
      <div className="grid md:grid-cols-2 gap-8">
         <Card>
            <CardHeader>
               <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" /> User Growth
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex items-end gap-4 h-64 pt-4">
                  {ANALYTICS_DATA.growth.map((data) => (
                     <div key={data.month} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="w-full bg-blue-500 rounded-t-sm hover:opacity-80 transition-opacity relative" style={{ height: `${(data.users / 2500) * 100}%` }}>
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              {data.users}
                           </div>
                        </div>
                        <span className="text-sm text-zinc-500">{data.month}</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" /> Revenue Trend
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex items-end gap-4 h-64 pt-4">
                  {ANALYTICS_DATA.revenue.map((data) => (
                     <div key={data.month} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="w-full bg-green-500 rounded-t-sm hover:opacity-80 transition-opacity relative" style={{ height: `${(data.amount / 350000) * 100}%` }}>
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              ₹{(data.amount/1000).toFixed(0)}k
                           </div>
                        </div>
                        <span className="text-sm text-zinc-500">{data.month}</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
