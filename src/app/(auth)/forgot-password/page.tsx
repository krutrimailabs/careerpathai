'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
      return (
        <Card className="shadow-xl border-zinc-200">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center text-[#002147]">Check your email</CardTitle>
                <CardDescription className="text-center">
                We have sent a password reset link to your email.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/login">Back to Login</Link>
                </Button>
            </CardContent>
        </Card>
      );
  }

  return (
    <Card className="shadow-xl border-zinc-200">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-[#002147]">Forgot password?</CardTitle>
        <CardDescription className="text-center">
          No worries, we&apos;ll send you reset instructions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" type="email" required />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Reset Password"}
                </Button>
            </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-zinc-100 pt-6">
         <Link href="/login" className="flex items-center text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
         </Link>
      </CardFooter>
    </Card>
  );
}
