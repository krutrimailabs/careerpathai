import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
       <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
       <p className="text-zinc-500 mb-8">Manage your preferences and security.</p>

       <div className="space-y-8">
          <Card>
             <CardHeader>
                <CardTitle>Profile Details</CardTitle>
                <CardDescription>This information will be visible to mentors.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Rahul" />
                   </div>
                   <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Sharma" />
                   </div>
                </div>
                <div className="space-y-2">
                   <Label htmlFor="email">Email Address</Label>
                   <Input id="email" defaultValue="rahul@example.com" disabled />
                </div>
                <Button>Save Changes</Button>
             </CardContent>
          </Card>

          <Card>
             <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Manage how we communicate with you.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                   <div className="space-y-0.5">
                      <Label>Email Alerts</Label>
                      <p className="text-sm text-zinc-500">Receive daily digest of new colleges.</p>
                   </div>
                   <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                   <div className="space-y-0.5">
                      <Label>Exam Reminders</Label>
                      <p className="text-sm text-zinc-500">Get notified 24h before deadlines.</p>
                   </div>
                   <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                   <div className="space-y-0.5">
                      <Label>Marketing Emails</Label>
                      <p className="text-sm text-zinc-500">Receive offers and newsletters.</p>
                   </div>
                   <Switch />
                </div>
             </CardContent>
          </Card>

          <Card className="border-red-100">
             <CardHeader>
                <CardTitle className="text-red-600">Danger Zone</CardTitle>
             </CardHeader>
             <CardContent>
                <Button variant="destructive">Delete Account</Button>
             </CardContent>
          </Card>
       </div>
    </div>
  );
}
