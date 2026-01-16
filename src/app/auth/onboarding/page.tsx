'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Check, ChevronRight } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg mb-8">
        <div className="flex justify-between text-sm font-medium text-zinc-500 mb-2">
           <span>Profile Setup</span>
           <span>Step {step} of {totalSteps}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
           <CardTitle className="text-2xl font-bold text-center">
              {step === 1 && "Start Your Journey"}
              {step === 2 && "Academic Details"}
              {step === 3 && "Set Your Goals"}
           </CardTitle>
           <CardDescription className="text-center">
              {step === 1 && "Tell us a bit about yourself to personalize your experience."}
              {step === 2 && "Help us find the right colleges and exams for you."}
              {step === 3 && "What do you aspire to become?"}
           </CardDescription>
        </CardHeader>
        <CardContent>
           {step === 1 && (
              <div className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Mumbai, Delhi, etc." />
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="role">I am a</Label>
                    <Select>
                       <SelectTrigger id="role"><SelectValue placeholder="Select Role" /></SelectTrigger>
                       <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                       </SelectContent>
                    </Select>
                 </div>
              </div>
           )}

           {step === 2 && (
              <div className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="class">Current Class/Grade</Label>
                    <Select>
                       <SelectTrigger id="class"><SelectValue placeholder="Select Class" /></SelectTrigger>
                       <SelectContent>
                          <SelectItem value="10">Class 10</SelectItem>
                          <SelectItem value="11">Class 11</SelectItem>
                          <SelectItem value="12">Class 12</SelectItem>
                          <SelectItem value="dropper">Dropper / 12+</SelectItem>
                       </SelectContent>
                    </Select>
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="stream">Stream</Label>
                    <Select>
                       <SelectTrigger id="stream"><SelectValue placeholder="Select Stream" /></SelectTrigger>
                       <SelectContent>
                          <SelectItem value="pcm">Science (PCM)</SelectItem>
                          <SelectItem value="pcb">Science (PCB)</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="arts">Arts / Humanities</SelectItem>
                       </SelectContent>
                    </Select>
                 </div>
                 <div className="space-y-2">
                    <Label htmlFor="school">School Name</Label>
                    <Input id="school" placeholder="e.g. DPS R.K. Puram" />
                 </div>
              </div>
           )}

           {step === 3 && (
              <div className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="target">Target Exam (Optional)</Label>
                    <Input id="target" placeholder="e.g. JEE, NEET, CLAT" />
                 </div>
                 <div className="space-y-2">
                    <Label>Career Interests</Label>
                    <div className="grid grid-cols-2 gap-2">
                       {['Engineering', 'Medical', 'Management', 'Design', 'Law', 'Research'].map(career => (
                          <div key={career} className="flex items-center space-x-2 border p-3 rounded-lg hover:bg-zinc-50 cursor-pointer">
                             <div className="h-4 w-4 rounded-full border border-zinc-300" />
                             <span className="text-sm">{career}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           )}
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
           {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
           ) : (
              <div /> // Spacer
           )}
           <Button onClick={handleNext} className="w-32">
              {step === totalSteps ? (
                 <>Complete <Check className="w-4 h-4 ml-2" /></>
              ) : (
                 <>Next <ChevronRight className="w-4 h-4 ml-2" /></>
              )}
           </Button>
        </CardFooter>
      </Card>
      
      <Button variant="link" className="mt-8 text-zinc-400" onClick={() => router.push('/dashboard')}>
         Skip for now
      </Button>
    </div>
  );
}
