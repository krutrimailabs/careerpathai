'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, Loader2 } from "lucide-react";
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent, role: string) => {
    e.preventDefault();
    setIsLoading(true);

    const email = (document.getElementById(`email-${role}`) as HTMLInputElement).value;
    const password = (document.getElementById(`password-${role}`) as HTMLInputElement).value;

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        setIsLoading(false);
        // Ensure you have a way to show errors, e.g., toast or alert
        alert(error.message); // Temporary simple error handling
        return;
    }

    // Auth state listener or middleware will handle redirect, but for UX speed:
    router.refresh(); // Refresh server components
    if (role === 'student') {
        router.push('/dashboard');
    } else if (role === 'parent') {
        router.push('/parent');
    } else {
        router.push('/dashboard');
    }
  };

  return (
    <Card className="shadow-xl border-zinc-200">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-[#002147]">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Enter your email to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="parent">Parent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="student">
            <form onSubmit={(e) => handleLogin(e, 'student')}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email-student">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                            <Input id="email-student" placeholder="m@example.com" type="email" className="pl-9" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password-student">Password</Label>
                            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                            <Input id="password-student" type="password" className="pl-9" required />
                        </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit" disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In"}
                    </Button>
                </div>
            </form>
          </TabsContent>

          <TabsContent value="parent">
            <form onSubmit={(e) => handleLogin(e, 'parent')}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email-parent">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                            <Input id="email-parent" placeholder="parent@example.com" type="email" className="pl-9" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password-parent">Password</Label>
                            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                            <Input id="password-parent" type="password" className="pl-9" required />
                        </div>
                    </div>
                    <Button className="w-full bg-[#002147] hover:bg-[#003366]" type="submit" disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In as Parent"}
                    </Button>
                </div>
            </form>
          </TabsContent>
        </Tabs>

        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-zinc-500">Or continue with</span>
            </div>
        </div>

        <Button variant="outline" className="w-full" type="button">
            <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 0.507 5.387 0 12s5.36 12 12 12c3.627 0 6.373-1.2 8.453-3.453C22.56 18.453 23.2 15.867 23.2 13.733c0-.907-.067-1.747-.2-2.547H12.48z" />
            </svg>
            Google
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-zinc-100 pt-6">
         <p className="text-sm text-zinc-600">
             Don&apos;t have an account? <Link href="/register" className="font-bold text-blue-600 hover:underline">Sign up</Link>
         </p>
      </CardFooter>
    </Card>
  );
}
