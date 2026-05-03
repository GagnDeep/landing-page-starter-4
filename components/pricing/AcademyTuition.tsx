import React from 'react';
import { pricingContent } from '@/content/pricing';

export function AcademyTuition() {
  const { academyTuition } = pricingContent;

  return (
    <section className="py-24 bg-background relative border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex flex-col md:flex-row gap-16 items-start">

          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <span className="font-sans text-xs tracking-[0.3em] text-secondary uppercase font-bold block mb-4">
              Education
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {academyTuition.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground font-light mb-12">
              {academyTuition.description}
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-12">
            {academyTuition.courses.map((course, idx) => (
              <div key={idx} className="bg-card border border-border p-8 md:p-12 hover:border-secondary transition-colors">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-8 border-b border-border">
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                      {course.name}
                    </h3>
                    <div className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase font-semibold">
                      {course.duration}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 font-sans text-3xl text-secondary font-semibold">
                    {course.price}
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-sm tracking-[0.1em] text-foreground uppercase font-bold mb-6">
                    What&apos;s Included
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="font-sans text-muted-foreground font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
