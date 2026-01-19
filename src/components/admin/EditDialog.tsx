'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Pencil } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RichTextEditor } from './RichTextEditor';
import { toast } from 'sonner';

interface EditItem {
  id: string;
  slug?: string;
  name?: string;
  title?: string;
  city?: string;
  state?: string;
  description?: string;
  content?: string;
  status?: string;
  role?: string;
  company?: string;
}

interface EditDialogProps {
  item: EditItem;
  type: 'college' | 'exam' | 'post' | 'category' | 'mentor';
  action: (formData: FormData) => Promise<void>;
}

export function EditDialog({ item, type, action }: EditDialogProps) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(item.content || '');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Pencil className="w-4 h-4 text-zinc-500" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {type.charAt(0).toUpperCase() + type.slice(1)}</DialogTitle>
        </DialogHeader>


        <form
          action={async (formData) => {
            try {
              await action(formData);
              setOpen(false);
              toast.success('Saved successfully');
            } catch (error) {
              console.error(error);
              toast.error('Failed to save. Please try again.');
            }
          }}
          className="space-y-4"
        >
          <input type="hidden" name="id" value={item.id} />
          
          {/* Common Fields */}
          {(type === 'college' || type === 'category') && (
             <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input name="name" defaultValue={item.name} required />
             </div>
          )}
           
          {(type === 'exam' || type === 'post' || type === 'mentor') && (
             <div className="space-y-2">
                <label className="text-sm font-medium">{type === 'mentor' ? 'Name' : 'Title'}</label>
                <Input name={type === 'mentor' ? 'name' : 'title'} defaultValue={item.name || item.title} required />
             </div>
          )}

          {type !== 'mentor' && (
             <div className="space-y-2">
               <label className="text-sm font-medium">Slug</label>
               <Input name="slug" defaultValue={item.slug} required />
             </div>
          )}
          
          {type === 'mentor' && (
             <>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Role</label>
                 <Input name="role" defaultValue={item.role} required />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Company</label>
                 <Input name="company" defaultValue={item.company} required />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Profile Image</label>
                 <Input type="file" name="image" accept="image/*" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Company Logo</label>
                 <Input type="file" name="company_logo" accept="image/*" />
               </div>
             </>
          )}

          {/* Type Specific Fields */}
          {type === 'college' && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <Input name="city" defaultValue={item.city} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">State</label>
                <Input name="state" defaultValue={item.state} required />
              </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Logo</label>
                 <Input type="file" name="logo" accept="image/*" />
               </div>
               <div className="space-y-2">
                 <label className="text-sm font-medium">Hero Image</label>
                 <Input type="file" name="hero_image" accept="image/*" />
               </div>
            </>
          )}

          {type === 'exam' && (
             <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea name="description" defaultValue={item.description} />
             </div>
          )}

          {type === 'post' && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <RichTextEditor value={content} onChange={setContent} />
                <input type="hidden" name="content" value={content} />
              </div>
             <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select name="status" defaultValue={item.status}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                </Select>
             </div>
            </>
          )}

          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
