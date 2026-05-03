import React from 'react';
import { CheckCircle2, Shield, Sparkles, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MicroIconSetProps {
  icon: 'hygiene' | 'quality' | 'time' | 'trust';
  className?: string;
}

export function MicroIconSet({ icon, className }: MicroIconSetProps) {
  const iconMap = {
    hygiene: Shield,
    quality: Sparkles,
    time: Clock,
    trust: CheckCircle2,
  };

  const IconComponent = iconMap[icon];

  return (
    <div className={cn("relative group inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--secondary)] text-[var(--primary)] transition-transform duration-300 motion-safe:hover:scale-110", className)}>
      <div className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <IconComponent className="w-6 h-6 stroke-1" aria-hidden="true" />
    </div>
  );
}
