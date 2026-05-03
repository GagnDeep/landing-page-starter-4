import Link from "next/link";
import { homeContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading font-medium text-2xl tracking-tight mb-4">
              The Smile Designers
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              {homeContent.footer.address}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{homeContent.footer.phone}</li>
              <li>{homeContent.footer.email}</li>
              <li>{homeContent.footer.whatsappUK} (UK)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{homeContent.footer.copyright}</p>
          <p>Designed with clinical precision.</p>
        </div>
      </div>
    </footer>
  );
}
