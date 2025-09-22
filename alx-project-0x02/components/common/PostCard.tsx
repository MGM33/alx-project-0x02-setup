import { PostProps } from '@/interfaces';
import { cn } from '@/lib/utils';

const PostCard = ({ id, title, body, userId }: PostProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 shadow-[var(--shadow-soft)] border border-border",
      "hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]",
      "hover:scale-[1.02] transform group"
    )}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
          Post #{id}
        </span>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
          User {userId}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-card-foreground mb-3 leading-tight group-hover:text-primary transition-colors capitalize">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {body}
      </p>
    </div>
  );
};

export default PostCard;