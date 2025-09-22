import { ButtonProps } from '@/interfaces';
import { cn } from '@/lib/utils';

const Button = ({ 
  children, 
  size = 'medium', 
  shape = 'rounded-md', 
  variant = 'default',
  onClick, 
  className, 
  type = 'button',
  ...props 
}: ButtonProps) => {
  const baseClasses = "font-medium transition-[var(--transition-smooth)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 active:scale-95 transform";
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };
  
  const variantClasses = {
    default: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)]',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-[var(--shadow-soft)]',
    hero: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-[var(--shadow-medium)] hover:scale-105'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        shapeClasses[shape],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;