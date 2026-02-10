import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const TrustSection: React.FC = () => {
    return (
        <Section className="relative overflow-hidden bg-neutral-50">

            <Container size="small" className="flex flex-col items-center text-center">
                <h2 className="mb-8 max-w-3xl font-serif text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] text-[#191919] tracking-tight font-semibold">
                    Enterprise-grade security. Zero compromise.
                </h2>
            </Container>
        </Section>
    );
};
