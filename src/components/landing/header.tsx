"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { VyomGarudLogo } from "./vyomgarud-logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Highlights", href: "#highlights" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <VyomGarudLogo className="h-8 w-auto text-primary" />
          <span className="font-bold text-lg">VyomGarud</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs bg-background">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                 <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={() => setIsMenuOpen(false)}>
                  <VyomGarudLogo className="h-8 w-auto text-primary" />
                  <span className="font-bold text-lg">VyomGarud</span>
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-6 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                    prefetch={false}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-4 border-t">
                <Button variant="default" className="w-full" asChild>
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
