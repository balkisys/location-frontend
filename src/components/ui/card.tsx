import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn(
      "bg-[#F3F2EF] overflow-hidden",
      className
    )}>
      {children}
    </div>
  );
};

export const CardHeader = ({ 
  children, 
  className 
}: CardProps) => {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ 
  children, 
  className 
}: CardProps) => {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({ 
  children, 
  className 
}: CardProps) => {
  return (
    <div className={cn("p-6 pt-0 flex items-center", className)}>
      {children}
    </div>
  );
};