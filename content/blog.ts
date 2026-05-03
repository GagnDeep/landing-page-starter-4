import { PageMetadata, CallToActionData } from "./home";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogContent = {
  metadata: {
    title: "Dental Health Insights & Blog | Perfect Smile Dental Clinic",
    description: "Expert advice, oral health tips, and clinic news from the professionals at Perfect Smile Dental Clinic in Chandigarh.",
  } as PageMetadata,

  hero: {
    headline: "Dental Health Insights",
    subheadline: "Expert advice, tips, and the latest news to help you maintain a perfect, healthy smile for life.",
  },

  categories: ["All", "Pediatric Care", "Oral Hygiene", "Cosmetic", "Clinic News"],

  featuredArticle: {
    id: "painless-root-canal-truth",
    title: "The Truth About Root Canals: Why You Have Nothing to Fear",
    excerpt: "For decades, root canals have been the punchline of jokes about pain. But with modern endodontics, the procedure is no more uncomfortable than a routine filling. Here is what actually happens during a painless root canal...",
    author: "Dr. Sarabjeet Singh",
    date: "October 12, 2023",
    category: "Treatments",
    readTime: "5 min read",
  } as BlogPost,

  recentArticles: [
    {
      id: "when-to-see-orthodontist",
      title: "When Should Your Child First See an Orthodontist?",
      excerpt: "The American Association of Orthodontists recommends a child's first check-up by age 7. Here's why early intervention is critical for pediatric dental health.",
      author: "Dr. Sarabjeet Singh",
      date: "September 28, 2023",
      category: "Pediatric Care",
      readTime: "4 min read",
    },
    {
      id: "brushing-mistakes",
      title: "5 Common Brushing Mistakes You Might Be Making",
      excerpt: "Are you brushing too hard? Using the wrong bristles? Our lead hygienist breaks down the most common errors that could be damaging your enamel.",
      author: "Priya Sharma",
      date: "September 15, 2023",
      category: "Oral Hygiene",
      readTime: "3 min read",
    },
    {
      id: "teeth-whitening-options",
      title: "Professional Whitening vs. Over-the-Counter Strips",
      excerpt: "Everyone wants a brighter smile, but not all whitening methods are created equal. Discover the safest, most effective ways to lift stubborn stains.",
      author: "Dr. Anjali Verma",
      date: "August 30, 2023",
      category: "Cosmetic",
      readTime: "6 min read",
    },
    {
      id: "flossing-importance",
      title: "Why Flossing is Non-Negotiable",
      excerpt: "If you're only brushing, you're missing 40% of your tooth surfaces. Learn why flossing is your best defense against gum disease.",
      author: "Priya Sharma",
      date: "August 10, 2023",
      category: "Oral Hygiene",
      readTime: "3 min read",
    },
    {
      id: "dental-anxiety-tips",
      title: "Overcoming Dental Anxiety: How We Keep You Calm",
      excerpt: "Fear of the dentist is incredibly common. We share the specific techniques and environment we use to ensure a stress-free visit for nervous patients.",
      author: "Dr. Sarabjeet Singh",
      date: "July 22, 2023",
      category: "Clinic News",
      readTime: "5 min read",
    },
  ] as BlogPost[],

  newsletter: {
    headline: "Get Smile Tips in Your Inbox",
    subheadline: "Join our monthly newsletter for oral health advice, exclusive offers, and clinic updates.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
  },

  finalCta: {
    headline: "Have questions about your oral health?",
    subheadline: "Schedule a visit and get personalized advice from our expert team.",
    cta: { label: "Book a Consultation", href: "/contact" },
  } as CallToActionData,
};
