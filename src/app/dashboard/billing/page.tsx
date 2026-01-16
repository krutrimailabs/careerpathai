import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Download, CreditCard } from 'lucide-react';
import { BILLING_HISTORY } from '@/data/dashboard';

export default function BillingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
       <h1 className="text-3xl font-bold mb-2">Billing & Subscription</h1>
       <p className="text-zinc-500 mb-8">Manage your plan and payment details.</p>

       <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-2">
             <CardHeader>
                <div className="flex justify-between items-start">
                   <div>
                      <CardTitle>Current Plan</CardTitle>
                      <CardDescription>You are currently on the <span className="font-bold text-blue-600">Pro Student</span> plan.</CardDescription>
                   </div>
                   <Badge>Active</Badge>
                </div>
             </CardHeader>
             <CardContent>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" /> Renews automatically on Jan 15, 2027
                   </div>
                   <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="w-4 h-4 text-zinc-400" /> Visa ending in 4242
                   </div>
                </div>
             </CardContent>
             <CardFooter className="gap-4">
                <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200">Cancel Subscription</Button>
                <Button>Update Payment Method</Button>
             </CardFooter>
          </Card>

          <Card className="bg-blue-50 border-blue-100">
             <CardHeader>
                <CardTitle className="text-blue-800">Need more?</CardTitle>
                <CardDescription className="text-blue-600">Upgrade to Premium for 1-on-1 Mentorship.</CardDescription>
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold text-blue-900 mb-4">₹4,999<span className="text-sm font-normal">/year</span></div>
               <Button className="w-full bg-blue-600 hover:bg-blue-700">Upgrade Plan</Button>
             </CardContent>
          </Card>
       </div>

       <h2 className="text-xl font-bold mb-4">Billing History</h2>
       <Card>
          <CardContent className="p-0">
             <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                   <tr>
                      <th className="text-left p-4 font-medium text-zinc-500">Invoice ID</th>
                      <th className="text-left p-4 font-medium text-zinc-500">Date</th>
                      <th className="text-left p-4 font-medium text-zinc-500">Amount</th>
                      <th className="text-left p-4 font-medium text-zinc-500">Plan</th>
                      <th className="text-right p-4 font-medium text-zinc-500">Status</th>
                      <th className="w-16"></th>
                   </tr>
                </thead>
                <tbody>
                   {BILLING_HISTORY.map((invoice) => (
                      <tr key={invoice.id} className="border-t">
                         <td className="p-4 font-medium">{invoice.id}</td>
                         <td className="p-4 text-zinc-500">{invoice.date}</td>
                         <td className="p-4">{invoice.amount}</td>
                         <td className="p-4">{invoice.plan}</td>
                         <td className="p-4 text-right">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">{invoice.status}</Badge>
                         </td>
                         <td className="p-4">
                            <Button variant="ghost" size="icon"><Download className="w-4 h-4 text-zinc-400" /></Button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </CardContent>
       </Card>
    </div>
  );
}
