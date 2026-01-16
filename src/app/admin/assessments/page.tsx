import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AssessmentsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assessment Logic</h1>
          <p className="text-zinc-500">Configure weighting and scoring for psychometric tests.</p>
        </div>
        <Button>Update Logic</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
              <CardHeader>
                  <CardTitle>Holland Code (RIASEC)</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-zinc-500">Weight configurations will go here.</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle>Stream Selector</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-zinc-500">Logic for Class 10 stream selection.</p>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
