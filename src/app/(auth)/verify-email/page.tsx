'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <Card className="shadow-xl border-zinc-200">
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-[#002147]">Verify your email</CardTitle>
            <CardDescription className="text-center">
            Thanks for signing up! Please check your email to verify your account.
            </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center py-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Mail className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-sm text-zinc-500 text-center mb-6">
                We sent a verification link to <span className="font-bold text-zinc-900">m@example.com</span>.<br/>
                Click the link inside to get started.
            </p>
            <div className="grid gap-4 w-full">
                <Button variant="outline" className="w-full">
                    Resend Verification Email
                </Button>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/login">Go to Login <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
            </div>
        </CardContent>
    </Card>
  );
}
