export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'hero';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (post: { title: string; content: string }) => void;
}