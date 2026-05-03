"use client";

import { faqContent } from "@/content/faq";
import { FadeIn } from "@/components/visuals/FadeIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info, ShieldAlert, CreditCard } from "lucide-react";

export function FaqCategories() {
  // Use a string composite key "categoryIndex-faqIndex" to track the open accordion
  const [openId, setOpenId] = useState<string | null>("0-0");

  const icons = [Info, ShieldAlert, CreditCard];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="space-y-16">
          {faqContent.categories.map((category, catIndex) => {
            const Icon = icons[catIndex % icons.length];
            return (
              <div key={category.id} className="space-y-8">
                <FadeIn className="flex items-center gap-4 pb-4 border-b border-border">
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </FadeIn>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const id = `${catIndex}-${faqIndex}`;
                    const isOpen = openId === id;
                    return (
                      <FadeIn key={id} delay={faqIndex * 0.1} direction="up">
                        <div className="border border-border rounded-xl bg-card overflow-hidden">
                          <button
                            onClick={() => setOpenId(isOpen ? null : id)}
                            className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-muted/50 transition-colors hover:bg-muted/30"
                          >
                            <span className="font-medium text-lg text-foreground">{faq.q}</span>
                            <ChevronDown
                              className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                              >
                                <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50 mt-2 pt-4">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
