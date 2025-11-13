
"use client"

import { useEffect, useState } from "react";

function AnimatedAboutContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const content = (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
        Defining the Future of Aerial Autonomy
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        At VyomGarud, our mission is to deliver unparalleled reliability and performance in unmanned aerial systems. We engineer military-grade drones that provide critical intelligence, ensure operational superiority, and adapt to the most demanding environments on the planet.
      </p>
    </>
  );

  if (!isMounted) {
    return <div className="text-center space-y-4 opacity-0">{content}</div>;
  }

  return (
    <div className="text-center space-y-4 animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
      {content}
    </div>
  )
}


export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto">
        <AnimatedAboutContent />
      </div>
    </section>
  );
}
