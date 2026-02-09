import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'default',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        primary: 'bg-[#FF4D4D] text-white hover:bg-[#FF3333] border border-transparent shadow-sm',
        secondary: 'bg-white text-neutral-900 border border-neutral-300 hover:bg-neutral-50 shadow-sm',
        outline: 'bg-transparent border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors',
        ghost: 'hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900',
        link: 'text-[#FF4D4D] underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        />
    );
};
