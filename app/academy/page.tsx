import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { featuresContent } from "@/content/features"
import { images } from "@/lib/images"
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid"
import { SectionDivider } from "@/components/visuals/SectionDivider"

export const metadata: Metadata = {
  title: "Academy Syllabus | Hair Makeup Unisex Salon & Academy",
  description: featuresContent.meta.description,
}

export default function AcademyPage() {
  const content = featuresContent

  return (
    <div className="w-full">
      {/* 1. Header (Dark Mode forced for Academy context) */}
      <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-center text-white">
        <DotMatrixGrid animate={false} color="#d4af37" className="opacity-30" />
        <div className="relative z-10 container mx-auto">
          <h1 className="mb-4 font-heading text-5xl font-bold md:text-6xl lg:text-7xl">
            {content.academySyllabus.headline}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Where raw talent is forged into professional mastery.
          </p>
        </div>
      </section>

      {/* 3. Academy Syllabus Overview */}
      <section className="bg-background px-4 py-24">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {content.academySyllabus.courses.map((course, idx) => (
              <AccordionItem
                key={idx}
                value={`course-${idx}`}
                className="border-border"
              >
                <AccordionTrigger className="py-6 font-heading text-xl transition-colors hover:text-primary hover:no-underline md:text-2xl">
                  <div className="flex flex-col gap-2 text-left sm:flex-row sm:items-center sm:gap-8">
                    <span>{course.title}</span>
                    <span className="w-fit rounded-sm bg-secondary px-3 py-1 font-sans text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                      {course.duration}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  <div className="pl-0 sm:pl-[4.5rem]">
                    <h4 className="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
                      Curriculum Modules
                    </h4>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {course.modules.map((module, modIdx) => (
                        <li
                          key={modIdx}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <SectionDivider type="line" />

      {/* 5. Interactive Comparison (Salon vs Academy) */}
      <section className="bg-secondary/30 px-4 py-24">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="mb-12 font-heading text-4xl font-bold md:text-5xl">
            {content.comparison.headline}
          </h2>

          <Tabs defaultValue="academy" className="w-full">
            <TabsList className="mx-auto mb-12 grid h-14 w-full max-w-md grid-cols-2 border border-border bg-background p-1">
              <TabsTrigger
                value="salon"
                className="h-full text-xs font-semibold tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {content.comparison.salonTab.title}
              </TabsTrigger>
              <TabsTrigger
                value="academy"
                className="h-full text-xs font-semibold tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {content.comparison.academyTab.title}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="salon" className="mt-0">
              <div className="grid grid-cols-1 items-center gap-12 text-left md:grid-cols-2">
                <div className="relative h-[400px] overflow-hidden rounded-md">
                  <Image
                    src={images.hero.salonMain.url}
                    alt={images.hero.salonMain.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 font-heading text-3xl font-bold">
                    The Salon Experience
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {content.comparison.salonTab.description}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="academy" className="mt-0">
              <div className="grid grid-cols-1 items-center gap-12 text-left md:grid-cols-2">
                <div className="relative order-last h-[400px] overflow-hidden rounded-md md:order-first">
                  <Image
                    src={images.academy.classroom.url}
                    alt={images.academy.classroom.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 font-heading text-3xl font-bold">
                    The Educational Journey
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {content.comparison.academyTab.description}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-background px-4 py-24 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-8 font-heading text-4xl font-bold">
            {content.cta.headline}
          </h2>
          <Button
            size="lg"
            variant="outline"
            className="rounded-none border-primary px-12 py-6 text-xs font-semibold tracking-wider text-primary uppercase hover:bg-primary hover:text-primary-foreground"
          >
            {content.cta.secondaryCTA}
          </Button>
        </div>
      </section>
    </div>
  )
}
