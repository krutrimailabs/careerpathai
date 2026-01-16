import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from 'lucide-react';

export default function AssessmentHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Assessment History</h1>
      
      <div className="space-y-4">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-bold">Interest Profiler</CardTitle>
                  <Badge>Completed</Badge>
              </CardHeader>
              <CardContent>
                  <div className="flex items-center text-sm text-zinc-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" /> Jan 15, 2024
                  </div>
                  <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 mb-2">
                      <span className="font-bold">Result:</span> Artistic-Investigative
                  </div>
              </CardContent>
          </Card>
           <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-bold">Personality Test</CardTitle>
                  <Badge variant="outline">In Progress</Badge>
              </CardHeader>
              <CardContent>
                  <div className="flex items-center text-sm text-zinc-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" /> Just now
                  </div>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
