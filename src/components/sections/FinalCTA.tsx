import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
    return (
        <Section className="bg-white">
            <Container size="small" className="flex flex-col items-center text-center">
                <h2 className="mb-16 max-w-3xl font-serif text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] text-[#191919] tracking-tight font-semibold">
                    Ready to transform your marketing?
                </h2>
                <Button size="lg" className="font-semibold">
                    Start Free Trial
                </Button>
            </Container>
        </Section>
    );
};
