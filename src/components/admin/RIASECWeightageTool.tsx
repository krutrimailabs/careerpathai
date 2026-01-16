'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RIASECScore } from "@/lib/ai-engine";

interface WeightageSliderProps {
  careerTitle: string;
  initialScores?: RIASECScore;
  onSave: (scores: RIASECScore) => void;
}

const traitDefinitions = {
  R: { name: "Realistic", color: "bg-red-500", desc: "Doers (Physical, technical, outdoors)" },
  I: { name: "Investigative", color: "bg-blue-500", desc: "Thinkers (Analytical, scientific, research)" },
  A: { name: "Artistic", color: "bg-purple-500", desc: "Creators (Creative, original, independent)" },
  S: { name: "Social", color: "bg-green-500", desc: "Helpers (Cooperative, teaching, service)" },
  E: { name: "Enterprising", color: "bg-orange-500", desc: "Persuaders (Leadership, business, influence)" },
  C: { name: "Conventional", color: "bg-zinc-500", desc: "Organizers (Data, detail, structured)" },
};

export function RIASECWeightageTool({ careerTitle, initialScores, onSave }: WeightageSliderProps) {
  const [scores, setScores] = useState<RIASECScore>(initialScores || {
    R: 50, I: 50, A: 50, S: 50, E: 50, C: 50
  });

  const handleSliderChange = (trait: keyof RIASECScore, value: number[]) => {
    setScores(prev => ({ ...prev, [trait]: value[0] }));
  };

  return (
    <Card className="w-full max-w-2xl shadow-xl border-zinc-200 dark:border-zinc-800">
      <CardHeader className="border-b bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">RIASEC Weighting: {careerTitle}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Set trait importance for the AI Matching Engine.
            </p>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20">
            90% Match Logic
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 pt-6">
        {(Object.keys(traitDefinitions) as Array<keyof RIASECScore>).map((trait) => (
          <div key={trait} className="space-y-3">
            <div className="flex justify-between items-end">
              <div>
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${traitDefinitions[trait].color}`} />
                <span className="font-bold text-sm uppercase tracking-wider">
                  {traitDefinitions[trait].name} ({trait})
                </span>
                <p className="text-xs text-muted-foreground">{traitDefinitions[trait].desc}</p>
              </div>
              <span className="text-lg font-mono font-bold bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                {scores[trait]}
              </span>
            </div>
            <Slider
              defaultValue={[scores[trait]]}
              max={100}
              step={1}
              onValueChange={(val) => handleSliderChange(trait, val)}
              className="py-2"
            />
          </div>
        ))}
        
        <div className="pt-4 flex gap-4">
          <Button 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => onSave(scores)}
          >
            Update Career AI Weights
          </Button>
          <Button variant="outline" onClick={() => setScores({R:50,I:50,A:50,S:50,E:50,C:50})}>
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
