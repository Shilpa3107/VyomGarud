import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-drone");

  return (
    <section id="hero" className="relative h-[calc(100vh-4rem)] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container max-w-4xl text-center text-primary-foreground animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            VyomGarud Systems
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl">
            Precision Engineered. Autonomously Deployed. Mission Ready.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#capabilities">
                Explore Our Systems
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="#contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
