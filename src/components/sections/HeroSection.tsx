import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
    return (
        <Section className="py-24 md:py-40 overflow-hidden">
            <Container size="hero" className="flex flex-col items-center text-center">



                {/* Headline */}
                <h1 className="mb-8 max-w-5xl font-serif text-[3.75rem] leading-[1.05] font-semibold tracking-tight text-[#191919] md:text-[5.5rem] lg:text-[6.5rem]">
                    Put AI agents to work<br className="hidden md:block" /> for marketing
                </h1>

                {/* Subheadline */}
                <p className="mb-16 max-w-2xl text-[1.125rem] text-neutral-600 md:text-[1.25rem] leading-relaxed">
                    Orchestrate intelligent agents to run end-to-end marketing workflows—delivering speed, control, and measurable impact.
                </p>

                {/* CTAs */}
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center mb-24 px-4 sm:px-0">
                    <Button size="lg" className="w-full sm:w-auto font-semibold">
                        Start Free Trial
                    </Button>
                </div>

                {/* Hero Graphic Placeholder */}
                <div className="relative w-full aspect-[16/9] max-w-5xl bg-neutral-50 rounded-2xl border border-neutral-200 shadow-sm">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
                        Hero Graphic Placeholder (Woman + Abstract Shapes)
                    </div>
                </div>

            </Container>
        </Section>
    );
};
