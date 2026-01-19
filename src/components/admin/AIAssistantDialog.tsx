'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { generateContent } from '@/actions/ai';

interface AIAssistantDialogProps {
  onInsert: (content: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AIAssistantDialog({ onInsert, open, onOpenChange }: AIAssistantDialogProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setResult(''); // Clear previous
    
    try {
      // TODO: Future - Pass actual context from the page (e.g. form values)
      const contextData = { source: 'Admin Editor' }; 
      
      const { content, error } = await generateContent(prompt, contextData);
      
      if (error) {
        toast.error('AI Error: ' + error);
      } else if (content) {
        setResult(content);
        toast.success('Content generated!');
      }
    } catch (err) { // eslint-disable-line @typescript-eslint/no-unused-vars
      toast.error('Failed to connect to AI service');
    } finally {
      setLoading(false);
    }
  };

  const handleInsert = () => {
    onInsert(result);
    onOpenChange(false);
    setPrompt('');
    setResult('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            AI Content Assistant
          </DialogTitle>
          <DialogDescription>
            Generate high-quality, anti-robotic content for your post.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Prompt</label>
            <Textarea
              placeholder="e.g., Write a verdict on why SRM KTR is better for CS..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {result && (
            <div className="space-y-2">
              <label className="text-sm font-medium">AI Result</label>
              <div className="max-h-[300px] overflow-y-auto rounded-md border p-4 bg-muted/50 text-sm whitespace-pre-wrap">
                {result}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          {!result ? (
            <Button onClick={handleGenerate} disabled={loading || !prompt.trim()}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Draft
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => setResult('')}>Discard</Button>
              <Button onClick={handleInsert}>Insert Content</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
