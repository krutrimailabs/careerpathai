'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '@/components/ui/button';
import { Bold, Italic, List, ListOrdered, Heading2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { AIAssistantDialog } from './AIAssistantDialog';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [aiOpen, setAiOpen] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
        attributes: {
            class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[150px] p-4 border rounded-md',
        },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2 border p-2 rounded-md bg-zinc-50 flex-wrap">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setAiOpen(true)}
          className="gap-1 text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100"
        >
          <Sparkles className="w-4 h-4" />
          AI Assistant
        </Button>
        <div className="w-px h-6 bg-zinc-300 mx-1" /> {/* Separator */}
        
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'bg-zinc-200' : ''}
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'bg-zinc-200' : ''}
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'bg-zinc-200' : ''}
        >
            <Heading2 className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-zinc-200' : ''}
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'bg-zinc-200' : ''}
        >
            <ListOrdered className="w-4 h-4" />
        </Button>
      </div>
      <EditorContent editor={editor} />
      
      <AIAssistantDialog 
        open={aiOpen} 
        onOpenChange={setAiOpen} 
        onInsert={(content: string) => editor.chain().focus().insertContent(content).run()} 
      />
    </div>
  );
}
