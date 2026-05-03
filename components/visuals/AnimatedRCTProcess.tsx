"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldPlus, ZapOff, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedRCTProcessProps {
  className?: string;
}

const steps = [
  {
    id: 1,
    title: "Complete Numbing",
    description: "Advanced local anesthesia ensures you feel absolutely nothing.",
    icon: ZapOff,
  },
  {
    id: 2,
    title: "Gentle Cleaning",
    description: "Infected tissue is swiftly removed using rotary technology.",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Sealing & Protection",
    description: "The tooth is sealed to prevent future infection.",
    icon: ShieldPlus,
  },
  {
    id: 4,
    title: "Pain-Free Recovery",
    description: "Walk out with your natural tooth saved and pain eliminated.",
    icon: CheckCircle2,
  },
];

export function AnimatedRCTProcess({ className }: AnimatedRCTProcessProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex gap-2 mb-4">
        {steps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(idx)}
            className="relative h-2 flex-1 rounded-full bg-muted overflow-hidden group"
            aria-label={`View step ${step.id}`}
          >
            {idx <= activeStep && (
              <motion.div
                layoutId="progressIndicator"
                className="absolute inset-0 bg-primary"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {/* Click area expansion for accessibility */}
            <span className="absolute inset-y-[-10px] inset-x-0" />
          </button>
        ))}
      </div>

      <div className="relative min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex gap-6 items-start p-6 rounded-2xl bg-card border shadow-sm"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {(() => {
                const Icon = steps[activeStep].icon;
                return <Icon className="w-6 h-6" />;
              })()}
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-1">Step {steps[activeStep].id}</div>
              <h4 className="text-xl font-heading mb-2">{steps[activeStep].title}</h4>
              <p className="text-muted-foreground">{steps[activeStep].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
