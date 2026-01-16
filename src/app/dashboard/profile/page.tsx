'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-[#002147]">My Profile</h3>
        <p className="text-sm text-zinc-500">Manage your account settings and preferences.</p>
      </div>
      <Separator />
      
      <div className="grid gap-6 md:grid-cols-2">
          
          {/* Personal Info */}
          <Card className="border-zinc-200 shadow-sm">
              <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                          <AvatarImage src="/placeholder-user.jpg" alt="@aarav" />
                          <AvatarFallback className="bg-blue-100 text-blue-700 font-bold text-xl">AS</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">Change Avatar</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input id="firstName" defaultValue="Aarav" />
                      </div>
                      <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input id="lastName" defaultValue="Sharma" />
                      </div>
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="aarav.sharma@example.com" disabled className="bg-zinc-50" />
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  <Button className="bg-[#002147]">Save Changes</Button>
              </CardContent>
          </Card>

          {/* Academic Profile */}
          <Card className="border-zinc-200 shadow-sm">
              <CardHeader>
                  <CardTitle>Academic Profile</CardTitle>
                  <CardDescription>This helps us recommend better colleges.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                      <Label htmlFor="class">Current Class</Label>
                      <Input id="class" defaultValue="Class 12" />
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="stream">Stream</Label>
                      <Input id="stream" defaultValue="Science (PCM)" />
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="school">School Name</Label>
                      <Input id="school" defaultValue="Delhi Public School, RK Puram" />
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="exam">Target Exam</Label>
                      <Input id="exam" defaultValue="JEE Advanced" />
                  </div>
                  <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">Update Academic Info</Button>
              </CardContent>
          </Card>

      </div>
    </div>
  );
}
