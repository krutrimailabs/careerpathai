'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Users, Loader2 } from "lucide-react";
import { createClient } from '@/utils/supabase/client';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("student");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    const lastName = (document.getElementById("last-name") as HTMLInputElement).value;

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: `${firstName} ${lastName}`,
                role: role,
            },
            emailRedirectTo: `${location.origin}/auth/callback`,
        },
    });

    if (error) {
        setIsLoading(false);
        alert(error.message);
        return;
    }

    setIsLoading(false);
    // Notify user to check email
    alert("Please check your email to confirm your account.");
    // Optionally redirect to a confirmation page
  };

  return (
    <Card className="shadow-xl border-zinc-200">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-[#002147]">Create an account</CardTitle>
        <CardDescription className="text-center">
          Start your personalized career journey today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
            <div className="space-y-4">
                
                <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Aarav" required />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Sharma" required />
                     </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" type="email" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>

                <div className="space-y-3 pt-2">
                    <Label>I am a...</Label>
                    <RadioGroup defaultValue="student" onValueChange={setRole} className="grid grid-cols-2 gap-4">
                        <div>
                            <RadioGroupItem value="student" id="student" className="peer sr-only" />
                            <Label
                                htmlFor="student"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:text-blue-600 cursor-pointer"
                            >
                                <User className="mb-3 h-6 w-6" />
                                Student
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="parent" id="parent" className="peer sr-only" />
                            <Label
                                htmlFor="parent"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:text-blue-600 cursor-pointer"
                            >
                                <Users className="mb-3 h-6 w-6" />
                                Parent
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" type="submit" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create Account"}
                </Button>
            </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-zinc-100 pt-6">
         <p className="text-sm text-zinc-600">
             Already have an account? <Link href="/login" className="font-bold text-blue-600 hover:underline">Sign in</Link>
         </p>
      </CardFooter>
    </Card>
  );
}
