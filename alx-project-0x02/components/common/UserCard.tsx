import { UserProps } from '@/interfaces';
import { cn } from '@/lib/utils';

const UserCard = ({ id, name, username, email, phone, website, address, company }: UserProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 shadow-[var(--shadow-soft)] border border-border",
      "hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]",
      "hover:scale-[1.02] transform group"
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
          ID: {id}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4">@{username}</p>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 text-muted-foreground">✉</span>
          <span className="text-muted-foreground">{email}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 text-muted-foreground">📞</span>
          <span className="text-muted-foreground">{phone}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 text-muted-foreground">🌐</span>
          <span className="text-muted-foreground">{website}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 text-muted-foreground">📍</span>
          <span className="text-muted-foreground">
            {address.city}, {address.street}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 text-muted-foreground">🏢</span>
          <span className="text-muted-foreground">{company.name}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;