import React from 'react';
import { Button } from '@nextui-org/react';
import { cn } from 'classnames';

export const EyeCatchingButton = ({ 
  children, 
  variant = 'primary', 
  ...props 
}) => {
  const variantStyles = {
    primary: cn(
      'bg-gradient-to-r from-[#09090B] via-[#f11414] to-[#09090B]',
      'text-white hover:opacity-90 transition-all duration-300',
      'border-transparent shadow-lg shadow-[#f11414]/30',
      'font-satoshi font-bold tracking-wider uppercase'
    ),
    secondary: cn(
      'bg-white text-[#f11414] border-[#f11414]',
      'hover:bg-[#f11414] hover:text-white transition-all duration-300',
      'font-satoshi font-medium tracking-wide'
    )
  };

  return (
    <Button
      {...props}
      aria-label={props['aria-label'] || 'Botão de ação'}
      className={cn(
        'px-6 py-3 rounded-xl text-base',
        'focus:outline-none focus:ring-2 focus:ring-[#f11414] focus:ring-opacity-50',
        'active:scale-95 transform transition-transform',
        variantStyles[variant],
        props.className
      )}
    >
      {children}
    </Button>
  );
};
