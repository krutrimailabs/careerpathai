import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, CreditCard, DollarSign } from "lucide-react";

export default function FinancePage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finance & Revenue</h1>
        <p className="text-zinc-500">Track ARR, subscriptions, and mentor payouts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">₹0.00</div>
                  <p className="text-xs text-muted-foreground">+0% from last month</p>
              </CardContent>
          </Card>
           <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">0</div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mentor Payouts Pending</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">₹0.00</div>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
