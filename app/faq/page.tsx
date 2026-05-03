import {
  FaqHero,
  FaqCategories,
  FaqCta
} from "@/components/faq";
import { faqContent } from "@/content/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
};

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqCategories />
      <FaqCta />
    </>
  );
}
