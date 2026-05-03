import React from 'react'
import Image from 'next/image'
import { aboutContent } from '@/content/about'
import { images } from '@/lib/images'
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid'

export function Team() {
  const { team } = aboutContent

  const teamImages = [
    images.teamSimran,
    images.teamRahul,
    images.teamPooja
  ]

  return (
    <section className="relative py-32 bg-background border-y border-border/40 overflow-hidden">
      <DotMatrixGrid className="opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{team.heading}</h2>
          <p className="text-xl text-muted-foreground">{team.subheadline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.members.map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={teamImages[idx]?.src || ''}
                  alt={teamImages[idx]?.alt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mt-1 mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed px-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
