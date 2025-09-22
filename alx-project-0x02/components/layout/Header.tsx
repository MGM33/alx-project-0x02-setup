import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/posts', label: 'Posts' },
    { href: '/users', label: 'Users' }
  ];

  return (
    <header className="bg-card border-b border-border shadow-[var(--shadow-soft)] sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-[var(--transition-smooth)]"
          >
            React Learning
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-[var(--transition-smooth)]",
                    "hover:bg-muted hover:text-foreground",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;