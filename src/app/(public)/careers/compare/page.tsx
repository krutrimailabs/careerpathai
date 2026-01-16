import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';

export default function CareerComparePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Compare Career Paths</h1>
      <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">
        Not sure which path to choose? Compare salary, growth, and daily life side-by-side.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Slot 1 */}
          <div className="border-2 border-dashed border-zinc-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
             <Button variant="outline" className="mb-4">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Career
             </Button>
             <p className="text-sm text-zinc-400">Select first career</p>
          </div>

           {/* Slot 2 */}
          <div className="border-2 border-dashed border-zinc-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
             <Button variant="outline" className="mb-4">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Career
             </Button>
             <p className="text-sm text-zinc-400">Select second career</p>
          </div>

           {/* Slot 3 */}
          <div className="border-2 border-dashed border-zinc-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
             <Button variant="outline" className="mb-4">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Career
             </Button>
             <p className="text-sm text-zinc-400">Select third career</p>
          </div>
      </div>
    </div>
  );
}
