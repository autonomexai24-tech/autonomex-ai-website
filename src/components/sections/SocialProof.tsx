import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const SocialProof: React.FC = () => {
    return (
        <Section spacing="tight" className="bg-white">
            <Container className="flex flex-col items-center">
                <p className="mb-12 text-center font-serif text-[1.875rem] md:text-[2rem] text-[#191919] tracking-tight">
                    World-class marketing teams trust Jasper
                </p>

                {/* Logo Grid/Row */}
                <div className="flex w-full flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-10 w-28 bg-neutral-300 rounded" />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
