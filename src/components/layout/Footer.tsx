
import React from 'react';
import { Container } from '../layout/Container';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111111] py-16 text-neutral-400 border-t border-neutral-800">
            <Container className="grid gap-12 md:grid-cols-4">
                {/* Brand Column */}
                <div className="col-span-1">
                    <div className="mb-6 flex items-center gap-2">
                        <span className="font-serif text-2xl text-white tracking-tight font-medium">jasper</span>
                    </div>
                    <p className="text-[15px] leading-relaxed max-w-xs">
                        AI marketing copilot for enterprise teams.
                    </p>
                </div>

                {/* Link Columns */}
                {[1, 2, 3].map((col) => (
                    <div key={col} className="flex flex-col gap-4">
                        <h4 className="font-medium text-white text-sm tracking-wide uppercase">Column {col}</h4>
                        <div className="flex flex-col gap-3">
                            {[1, 2, 3, 4].map((link) => (
                                <a key={link} href="#" className="text-[15px] hover:text-[#FF4D4D] transition-colors w-fit">
                                    Footer Link {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>

            <Container className="mt-12 border-t border-neutral-800 pt-8 text-sm">
                &copy; 2026 Autonomex AI. All rights reserved.
            </Container>
        </footer>
    );
};
