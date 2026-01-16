'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { ASSESSMENT_QUESTIONS } from '@/data/assessment-questions';
import { Check, Loader2 } from 'lucide-react';

export default function AssessmentTestPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // answers state removed as it was unused in this mock
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / ASSESSMENT_QUESTIONS.length) * 100;

  const handleAnswer = (_score: number) => {
    // Record answer (Mock: logic removed for simplicity as strictly UI demo)
    console.log(_score); // Suppress unused var warning
    
    // Auto-advance or Finish
    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setTimeout(() => {
          setCurrentQuestionIndex(prev => prev + 1);
      }, 250); // Slight delay for visual feedback
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setIsAnalyzing(true);
    // Simulate AI Analysis
    setTimeout(() => {
        router.push('/assessment/results');
    }, 3000);
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
          <div className="text-center space-y-6 max-w-md">
              <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                  <Loader2 className="absolute inset-0 m-auto w-8 h-8 text-blue-600 animate-pulse" />
              </div>
              <div>
                  <h2 className="text-2xl font-bold text-[#002147] mb-2">Analyzing your profile...</h2>
                  <p className="text-zinc-500">Matching your traits against 12,000+ career paths and university courses.</p>
              </div>
              <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-600 animate-pulse delay-75">
                      <Check className="w-4 h-4 text-green-500" /> Analyzing Personality Type (Big 5)
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-600 animate-pulse delay-150">
                      <Check className="w-4 h-4 text-green-500" /> Mapping Interest Vectors
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-600 animate-pulse delay-300">
                      <Check className="w-4 h-4 text-green-500" /> Calculating College Fit Score
                  </div>
              </div>
          </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
        
        <div className="w-full max-w-2xl">
            {/* Header / Progress */}
            <div className="mb-8 space-y-2">
                <div className="flex justify-between text-sm font-bold text-zinc-500">
                    <span>Question {currentQuestionIndex + 1} of {ASSESSMENT_QUESTIONS.length}</span>
                    <span>{Math.round(progress)}% Completed</span>
                </div>
                <Progress value={progress} className="h-2 bg-zinc-200 text-[#FF9900]" />
            </div>

            {/* Question Card */}
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#002147] mb-8 leading-tight">
                        {currentQuestion.text}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                        <Button onClick={() => handleAnswer(1)} variant="outline" className="h-14 font-medium border-zinc-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all text-wrap">
                            Strongly Disagree
                        </Button>
                        <Button onClick={() => handleAnswer(2)} variant="outline" className="h-14 font-medium border-zinc-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all">
                            Disagree
                        </Button>
                        <Button onClick={() => handleAnswer(3)} variant="outline" className="h-14 font-medium border-zinc-200 hover:bg-zinc-100 transition-all">
                            Neutral
                        </Button>
                        <Button onClick={() => handleAnswer(4)} variant="outline" className="h-14 font-medium border-zinc-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                            Agree
                        </Button>
                        <Button onClick={() => handleAnswer(5)} variant="outline" className="h-14 font-bold border-zinc-200 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all shadow-sm">
                            Strongly Agree
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Hint / Helper */}
            <div className="mt-8 text-center text-zinc-400 text-sm">
                <p>Be honest, there are no wrong answers.</p>
            </div>
        </div>

    </div>
  );
}
