
"use client";

import { Cpu, ShieldCheck, Crosshair } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Cpu,
    title: "AI-Powered Autonomy",
    description: "Our onboard AI enables dynamic mission planning, threat detection, and autonomous navigation in GPS-denied environments."
  },
  {
    icon: ShieldCheck,
    title: "Military-Grade Reliability",
    description: "Built to withstand extreme conditions with redundant systems, ensuring high mission success rates and operational uptime."
  },
  {
    icon: Crosshair,
    title: "Precision Engineering",
    description: "Advanced sensor fusion and stabilized optics deliver crystal-clear imagery and precise targeting capabilities day or night."
  }
];

function AnimatedHighlightsGrid() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderHighlight = (highlight: Highlight, isAnimated: boolean) => {
    const animationClass = isAnimated ? "animate-in fade-in-0 slide-in-from-bottom-10" : "opacity-0";
    const animationStyle = isAnimated ? { animationDelay: `${highlights.indexOf(highlight) * 150}ms`, animationFillMode: 'backwards' } : {};
    
    return (
      <div 
        key={highlight.title} 
        className={`flex flex-col items-center space-y-4 ${animationClass}`}
        style={animationStyle}
      >
        <div className="bg-primary text-primary-foreground rounded-full p-4">
          <highlight.icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-primary">{highlight.title}</h3>
        <p className="text-muted-foreground">{highlight.description}</p>
      </div>
    );
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      {highlights.map(highlight => renderHighlight(highlight, isMounted))}
    </div>
  )
}

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 sm:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Advanced by Design
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Core features that define the VyomGarud advantage in the field.
          </p>
        </div>
        <AnimatedHighlightsGrid />
      </div>
    </section>
  );
}
