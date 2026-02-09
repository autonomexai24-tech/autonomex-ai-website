import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const SocialProof: React.FC = () => {
    return (
        <Section spacing="tight" className="border-y border-neutral-100 bg-[#FAFAFA]">
            <Container className="flex flex-col items-center">
                <p className="mb-10 text-center font-serif text-2xl md:text-[1.75rem] text-[#191919] tracking-tight">
                    World-class marketing teams trust Jasper
                </p>

                {/* Logo Grid/Row */}
                <div className="flex w-full flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-8 w-24 bg-neutral-300 rounded" />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
