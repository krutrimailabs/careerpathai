'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Plus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function CategoriesAdminPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('career_categories').select('*').order('name');
      if (data) setCategories(data);
      setLoading(false);
    };
    fetchCategories();
  }, [refreshTrigger]);

  const handleAdd = async () => {
    if (!newCategory.trim()) return;
    const slug = newCategory.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
    const supabase = createClient();
    
    const { error } = await supabase.from('career_categories').insert([{ name: newCategory, slug }]);
    
    if (error) {
      toast.error('Failed to add category');
    } else {
      toast.success('Category added');
      setNewCategory('');
      setRefreshTrigger(prev => prev + 1);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const supabase = createClient();
    const { error } = await supabase.from('career_categories').delete().eq('id', id);
    if (error) toast.error('Failed to delete');
    else {
      toast.success('Deleted');
      setRefreshTrigger(prev => prev + 1);
    }
  };

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Manage Career Categories</h1>
      
      <div className="flex gap-4 mb-8">
        <Input 
          placeholder="New Category Name" 
          value={newCategory} 
          onChange={(e) => setNewCategory(e.target.value)} 
        />
        <Button onClick={handleAdd}><Plus className="w-4 h-4 mr-2" /> Add</Button>
      </div>

      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell className="font-medium">{cat.name}</TableCell>
                <TableCell className="text-zinc-500">{cat.slug}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(cat.id)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
