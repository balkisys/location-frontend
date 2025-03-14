'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'default',
      size = 'md',
      href,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none';

    const variantStyles = {
      default: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100',
      primary: 'bg-valtech-red text-white hover:bg-red-600',
      outline: 'border border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-50',
      ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
      link: 'text-valtech-red hover:underline p-0 h-auto'
    };

    const sizeStyles = {
      sm: 'h-8 px-3 text-xs rounded',
      md: 'h-10 px-4 py-2 rounded',
      lg: 'h-12 px-6 text-base rounded',
    };

    const widthStyles = fullWidth ? 'w-full' : '';
    
    const classes = cn(
      baseStyles, 
      variantStyles[variant], 
      sizeStyles[size], 
      widthStyles,
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg
            className={cn("animate-spin -ml-1 mr-2 h-4 w-4", {
              "mr-2": iconPosition === "left",
              "ml-2 order-2": iconPosition === "right"
            })}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;