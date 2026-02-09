import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const TrustSection: React.FC = () => {
    return (
        <Section className="relative overflow-hidden bg-[#F0F8FF]">
            {/* Background Grid - Blueprint Style */}
            <div className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: 'linear-gradient(#00CED1 1px, transparent 1px), linear-gradient(90deg, #00CED1 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Masking Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0F8FF] via-transparent to-[#F0F8FF]" />

            <Container className="relative z-10 flex flex-col items-center text-center">
                <span className="mb-6 font-mono text-sm tracking-widest text-[#008B8B] uppercase font-semibold bg-white/50 px-3 py-1 rounded backdrop-blur-sm">
                    Trust Foundation
                </span>

                <h2 className="mb-8 max-w-4xl font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-[#191919]">
                    Enterprise-grade security,<br /> quality outputs
                </h2>

                <p className="mb-10 max-w-2xl text-[1.125rem] leading-relaxed text-neutral-600">
                    Enterprise-grade security and an LLM-agnostic architecture prioritize your data protection & privacy while providing superior quality marketing outputs.
                </p>

                <Button size="lg" className="bg-white text-[#191919] border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 shadow-sm h-12 px-8 text-base font-semibold">
                    Explore Trust
                </Button>
            </Container>
        </Section>
    );
};
