import React from 'react';
import Image from 'next/image';
import { aboutContent } from '@/content/about';
import { images } from '@/lib/images';

export function MeetTheTeam() {
  const { meetTheTeam } = aboutContent;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {meetTheTeam.headline}
          </h2>
          <p className="font-sans text-lg text-muted-foreground font-light">
            {meetTheTeam.subheadline}
          </p>
        </div>

        <div className="flex justify-center">
          {/* Currently only showing founder as per content.ts, can be expanded to grid later */}
          {meetTheTeam.members.map((member, idx) => (
            <div key={idx} className="w-full max-w-sm relative group overflow-hidden bg-background border border-border">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={images.portraits.founder.src}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center backdrop-blur-sm">
                  <p className="font-sans text-muted-foreground font-light mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div className="p-6 text-center border-t border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <span className="font-sans text-xs tracking-[0.2em] text-primary uppercase font-bold">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
