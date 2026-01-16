import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function AdmissionsPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admissions Pipeline</h1>
        <p className="text-zinc-500">Track student applications and college leads.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500">Total Enquiries</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">0</div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500">Applications Sent</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">0</div>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-zinc-500">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">0%</div>
              </CardContent>
          </Card>
      </div>

      <Card>
          <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="text-center py-12 text-zinc-500">
                  No leads found. Connect to `careerpath.leads` table.
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
