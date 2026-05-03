import React from 'react';
import Image from 'next/image';
import { featuresContent } from '@/content/features';
import { images } from '@/lib/images';

export function AcademyCurriculum() {
  const { academyCurriculum } = featuresContent;

  return (
    <section id="academy" className="py-24 bg-background border-t border-border scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Main content switched sides for layout rhythm */}
          <div className="w-full md:w-2/3 flex flex-col gap-12 order-2 md:order-1">
            {academyCurriculum.courses.map((course, idx) => (
              <div key={idx} className="bg-card border border-border p-8 md:p-12 hover:border-secondary transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h3 className="font-heading text-3xl font-bold text-foreground">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-sans tracking-[0.1em] uppercase font-semibold text-muted-foreground">
                    <span>{course.level}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <p className="font-sans text-lg text-muted-foreground font-light leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3 md:sticky md:top-32 order-1 md:order-2">
            <span className="font-sans text-xs tracking-[0.3em] text-secondary uppercase font-bold block mb-4">
              The Academy
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {academyCurriculum.headline}
            </h2>
            <p className="font-sans text-lg text-muted-foreground font-light mb-12">
              {academyCurriculum.subheadline}
            </p>
            <div className="relative aspect-[4/5] w-full max-w-sm rounded-lg overflow-hidden hidden md:block">
               <Image
                src={images.academy.masterclass.src}
                alt={images.academy.masterclass.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
