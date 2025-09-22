import { useState } from 'react';
import { PostModalProps } from '@/interfaces';
import Button from './Button';
import { cn } from '@/lib/utils';

const PostModal = ({ isOpen, onClose, onAddPost }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddPost({ title: title.trim(), content: content.trim() });
      setTitle('');
      setContent('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={cn(
        "relative bg-card rounded-lg p-6 w-full max-w-md shadow-[var(--shadow-large)]",
        "border border-border animate-in fade-in-0 zoom-in-95 duration-200"
      )}>
        <h2 className="text-2xl font-bold text-card-foreground mb-6">Create New Post</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-card-foreground mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={cn(
                "w-full px-3 py-2 border border-input rounded-md",
                "bg-background text-foreground placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                "transition-[var(--transition-smooth)]"
              )}
              placeholder="Enter post title..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-card-foreground mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className={cn(
                "w-full px-3 py-2 border border-input rounded-md resize-none",
                "bg-background text-foreground placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
                "transition-[var(--transition-smooth)]"
              )}
              placeholder="Enter post content..."
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="secondary"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
            >
              Add Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;