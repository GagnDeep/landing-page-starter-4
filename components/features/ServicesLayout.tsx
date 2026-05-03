"use client";

import { featuresContent } from "@/content/features";
import { HoverCard } from "@/components/visuals/HoverCard";
import { CheckCircle2, ChevronRight, Activity, Smile, Stethoscope, Baby } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import Image from "next/image";

// Using React.ElementType ensures we can use these components cleanly
const IconsMap: Record<string, React.ElementType> = {
  implants: Activity,
  endodontics: Stethoscope,
  cosmetic: Smile,
  pediatric: Baby,
};

export function ServicesLayout() {
  const [activeTab, setActiveTab] = useState(featuresContent.services[0].id);
  const activeService = featuresContent.services.find(s => s.id === activeTab) || featuresContent.services[0];
  const ActiveIcon = IconsMap[activeService.id] || Activity;

  // Type assertion for key access
  const imageKey = activeService.id as keyof typeof images.services;
  const imageMeta = images.services[imageKey];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-2">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">Treatments</h3>
              {featuresContent.services.map((service) => {
                const Icon = IconsMap[service.id] || Activity;
                const isActive = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted/30 text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="h-5 w-5" />
                      <span className="font-medium text-left">{service.title}</span>
                    </div>
                    {isActive && <ChevronRight className="h-5 w-5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col space-y-10"
            >
              {/* Header */}
              <div>
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <ActiveIcon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
                  {activeService.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Dynamic Image */}
              {imageMeta && (
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border">
                  <Image
                    src={imageMeta.src}
                    alt={imageMeta.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Technology & Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <HoverCard className="p-8 bg-muted/10 border-border/50">
                  <h4 className="font-heading text-xl font-semibold mb-4 text-foreground">Advanced Technology</h4>
                  <p className="text-muted-foreground leading-relaxed font-mono text-sm bg-muted p-4 rounded-lg">
                    {activeService.technology}
                  </p>
                </HoverCard>

                <HoverCard className="p-8 bg-muted/10 border-border/50">
                  <h4 className="font-heading text-xl font-semibold mb-4 text-foreground">Clinical Benefits</h4>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </HoverCard>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
