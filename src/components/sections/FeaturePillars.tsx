import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const FeaturePillars: React.FC = () => {
    return (
        <Section>
            <Container size="small" className="flex flex-col items-center text-center">
                <h2 className="mb-8 max-w-4xl font-serif text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.05] text-[#191919] tracking-tight font-semibold">
                    AI-powered content creation
                </h2>
                <p className="max-w-2xl text-[1.125rem] md:text-[1.25rem] leading-relaxed text-neutral-600">
                    From blog posts to brand campaigns, orchestrate intelligent workflows that deliver at scale
                </p>
            </Container>
        </Section>
    );
};
