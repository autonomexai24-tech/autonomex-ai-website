import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
    return (
        <Section className="py-20 md:py-32 overflow-hidden">
            <Container size="hero" className="flex flex-col items-center text-center">

                {/* Notification Pill */}
                <div className="group mb-8 inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm transition-colors hover:border-neutral-300 cursor-pointer">
                    <span className="font-semibold text-[#FF4D4D] mr-2">New research!</span>
                    <span className="text-neutral-600">The State of AI in Marketing 2026</span>
                    <span className="ml-2 text-neutral-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>

                {/* Headline */}
                <h1 className="mb-6 max-w-5xl font-serif text-[3.5rem] leading-[1.1] font-normal tracking-[-0.02em] text-[#191919] md:text-[5.5rem] lg:text-[6rem]">
                    Put AI agents to work<br className="hidden md:block" /> for marketing
                </h1>

                {/* Subheadline */}
                <p className="mb-10 max-w-2xl text-lg text-neutral-600 md:text-[1.25rem] leading-relaxed md:leading-normal">
                    Orchestrate intelligent agents to run end-to-end marketing workflows—delivering speed, control, and measurable impact.
                </p>

                {/* CTAs */}
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center mb-20 px-4 sm:px-0">
                    <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        Start Free Trial
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-medium rounded-lg hover:border-neutral-400 transition-colors">
                        Get A Demo
                    </Button>
                </div>

                {/* Hero Graphic Placeholder */}
                <div className="relative w-full aspect-[16/9] max-w-5xl bg-neutral-100 rounded-xl border border-neutral-200">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        Hero Graphic Placeholder (Woman + Abstract Shapes)
                    </div>
                </div>

            </Container>
        </Section>
    );
};
