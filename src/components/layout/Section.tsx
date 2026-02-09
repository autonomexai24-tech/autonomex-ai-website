import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    spacing?: 'default' | 'tight' | 'none';
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    spacing = 'default',
    ...props
}) => {
    const spacingClasses = {
        default: 'py-16 md:py-24',
        tight: 'py-12 md:py-16',
        none: 'py-0',
    };

    return (
        <section
            className={cn(
                'w-full',
                spacingClasses[spacing],
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
};
