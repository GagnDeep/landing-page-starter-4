"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    items: [
      {
        title: "Bridal Artistry",
        href: "/services#bridal",
        description: "Flawless, camera-ready bridal makeup.",
      },
      {
        title: "Hair Design",
        href: "/services#hair",
        description: "Precision cutting and bespoke coloring.",
      },
    ],
  },
  {
    name: "Academy",
    href: "/academy",
    items: [
      {
        title: "Master Bridal Makeup",
        href: "/academy#bridal",
        description: "8-Week intensive program.",
      },
      {
        title: "Comprehensive Cosmetology",
        href: "/academy#cosmetology",
        description: "6-Month career foundation.",
      },
    ],
  },
  { name: "Pricing", href: "/pricing" },
]

export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-xl font-bold tracking-tight md:text-2xl">
            Ajay<span className="text-primary">Sir</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.name}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-sm font-semibold tracking-wider uppercase">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 border border-border bg-popover p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.items.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm leading-none font-semibold tracking-wide uppercase">
                                    {item.title}
                                  </div>
                                  <p className="mt-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-sm font-semibold tracking-wider uppercase"
                        )}
                      >
                        {link.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions (Theme + CTA + Mobile Menu) */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hidden md:flex"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button className="hidden rounded-none bg-primary px-6 py-5 text-xs font-semibold tracking-wider text-primary-foreground uppercase hover:bg-primary/90 md:flex">
            Book Appointment
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] pt-12 sm:w-[400px]">
              <SheetTitle className="sr-only">
                Mobile Navigation Menu
              </SheetTitle>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="flex flex-col gap-2">
                    <Link
                      href={link.href}
                      className="font-heading text-lg font-semibold tracking-wider uppercase"
                    >
                      {link.name}
                    </Link>
                    {link.items && (
                      <div className="mt-2 flex flex-col gap-2 border-l border-border pl-4">
                        {link.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="text-sm tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-8 flex flex-col gap-4">
                  <Button className="w-full rounded-none font-semibold tracking-wider uppercase">
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                    className="w-full rounded-none font-semibold tracking-wider uppercase"
                  >
                    Toggle Theme
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
