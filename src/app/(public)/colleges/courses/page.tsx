import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CollegeCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['B.Tech Computer Science', 'MBBS', 'BBA', 'MBA', 'B.Des', 'B.Arch'].map((course) => (
             <Card key={course} className="hover:shadow-md cursor-pointer">
                 <CardContent className="p-6">
                     <div className="flex justify-between items-start mb-4">
                         <h3 className="font-bold text-lg">{course}</h3>
                         <Badge variant="secondary">4 Years</Badge>
                     </div>
                     <p className="text-sm text-zinc-500">Explore top colleges offering {course} in India.</p>
                 </CardContent>
             </Card>
        ))}
      </div>
    </div>
  );
}
