import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

const features = [
    { title: 'Canvas', color: 'bg-brand-green-light', hoverBorder: 'hover:border-green-200' },
    { title: 'Studio', color: 'bg-brand-red-light', hoverBorder: 'hover:border-red-200' },
    { title: 'Jasper IQ', color: 'bg-brand-blue-light', hoverBorder: 'hover:border-blue-200' },
    { title: 'Trust', color: 'bg-brand-yellow-light', hoverBorder: 'hover:border-yellow-200' },
];

export const FeaturePillars: React.FC = () => {
    return (
        <Section>
            <Container>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent ${feature.color} ${feature.hoverBorder}`}
                        >
                            <div>
                                <h3 className="mb-6 font-serif text-[2rem] leading-none text-[#191919]">{feature.title}</h3>
                                {/* Feature Graphic Placeholder */}
                                <div className="mb-8 aspect-[1.1/1] w-full rounded-xl bg-white/40 border border-white/20 backdrop-blur-sm" />
                            </div>

                            <div>
                                <p className="mb-6 text-[17px] leading-relaxed text-[#191919] font-medium">
                                    Plan, create, and collaborate intuitively and at scale.
                                </p>
                                <div className="flex items-center font-semibold text-[#191919] group-hover:underline decoration-2 underline-offset-4">
                                    Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
