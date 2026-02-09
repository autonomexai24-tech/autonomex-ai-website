import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'default' | 'hero' | 'small';
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
    size = 'default',
    ...props
}) => {
    const sizeClasses = {
        default: 'max-w-[1280px]',
        hero: 'max-w-[1440px]',
        small: 'max-w-[1024px]',
    };

    return (
        <div
            className={cn(
                'w-full mx-auto px-6 md:px-8',
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
