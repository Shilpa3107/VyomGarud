import Link from "next/link";
import { DroneIcon } from "./drone-icon";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <DroneIcon className="h-6 w-6" />
            <span className="font-bold text-lg">VyomGarud</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            © 2024 VyomGarud Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild className="text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href={social.href} aria-label={social.name}>
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
