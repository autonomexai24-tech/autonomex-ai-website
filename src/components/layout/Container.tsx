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
        default: 'max-w-[1200px]',
        hero: 'max-w-[1280px]',
        small: 'max-w-[960px]',
    };

    return (
        <div
            className={cn(
                'w-full mx-auto px-6 md:px-10 lg:px-12',
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
