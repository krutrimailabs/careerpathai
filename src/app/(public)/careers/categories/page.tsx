import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Stethoscope, Briefcase, DraftingCompass,  Megaphone, Gavel } from 'lucide-react';

const CATEGORIES = [
  { id: 'tech', name: 'Technology & Engineering', icon: Code, count: 45 },
  { id: 'medical', name: 'Medical & Healthcare', icon: Stethoscope, count: 32 },
  { id: 'business', name: 'Business & Management', icon: Briefcase, count: 28 },
  { id: 'design', name: 'Design & Architecture', icon: DraftingCompass, count: 18 },
  { id: 'media', name: 'Media & Communications', icon: Megaphone, count: 22 },
  { id: 'law', name: 'Law & Policy', icon: Gavel, count: 12 },
];

export default function CareerCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Browse Careers by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
          <Link href={`/careers?category=${cat.id}`} key={cat.id}>
             <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-zinc-200">
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <cat.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <CardTitle className="text-lg">{cat.name}</CardTitle>
                      <p className="text-sm text-zinc-500">{cat.count} Career Paths</p>
                   </div>
                </CardHeader>
             </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
