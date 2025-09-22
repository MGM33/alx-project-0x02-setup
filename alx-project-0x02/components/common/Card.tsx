import { CardProps } from '@/interfaces';
import { cn } from '@/lib/utils';

const Card = ({ title, content, className }: CardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 shadow-[var(--shadow-soft)] border border-border",
      "hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]",
      "hover:scale-[1.02] transform",
      className
    )}>
      <h3 className="text-xl font-semibold text-card-foreground mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default Card;