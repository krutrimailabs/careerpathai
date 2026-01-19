import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Plus } from 'lucide-react';
import { getCategories, createCategory, deleteCategory, updateCategory } from '@/actions/categories';
import { EditDialog } from "@/components/admin/EditDialog";

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default async function CategoriesAdminPage() {
  const categories = await getCategories() as Category[];

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Manage Career Categories</h1>
      
      <form action={createCategory} className="flex gap-4 mb-8">
        <Input name="name" placeholder="New Category Name" required />
        <Button type="submit"><Plus className="w-4 h-4 mr-2" /> Add</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat) => (
            <TableRow key={cat.id}>
              <TableCell className="font-medium">{cat.name}</TableCell>
              <TableCell className="text-zinc-500">{cat.slug}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <EditDialog item={cat} type="category" action={updateCategory} />
                  <form action={deleteCategory.bind(null, cat.id)}>
                    <Button variant="ghost" size="sm" type="submit">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </form>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {categories.length === 0 && (
             <TableRow>
                  <TableCell colSpan={3} className="text-center py-8 text-zinc-500">
                      No categories found.
                  </TableCell>
              </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
