import { Metadata } from "next"
import ContactClient from "./client"
import { contactContent } from "@/content/contact"

export const metadata: Metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
}

export default function ContactPage() {
  return <ContactClient />
}
