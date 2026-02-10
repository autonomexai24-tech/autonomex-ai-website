import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
    return (
        <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-200 border-b border-neutral-200/60 shadow-sm">
            <Container className="flex h-[80px] items-center justify-between">
                {/* Logo Placeholder - Jasper Orange */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="font-serif text-3xl text-[#FF4D4D] tracking-tight font-medium">jasper</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    {['Platform', 'Solutions', 'Resources', 'Company', 'Pricing'].map((item) => (
                        <a key={item} href="#" className="text-[15px] font-medium text-[#191919] hover:text-[#FF4D4D] transition-colors">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="hidden md:inline-flex text-[15px] font-medium hover:bg-neutral-50">Log In</Button>
                    <Button size="default" className="font-semibold">Try Free</Button>
                    <Button size="default" className="font-semibold hidden sm:inline-flex">Get A Demo</Button>
                    {/* Mobile Menu Placeholder */}
                    <Button variant="ghost" size="icon" className="lg:hidden -mr-2">
                        <span className="sr-only">Menu</span>
                        <div className="flex flex-col gap-1.5">
                            <span className="block h-0.5 w-6 bg-neutral-900"></span>
                            <span className="block h-0.5 w-6 bg-neutral-900"></span>
                            <span className="block h-0.5 w-6 bg-neutral-900"></span>
                        </div>
                    </Button>
                </div>
            </Container>
        </header>
    );
};
