import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const capabilities = [
  {
    id: "capability-surveillance",
    title: "Autonomous Surveillance",
    description: "High-endurance platforms for persistent, wide-area intelligence, surveillance, and reconnaissance (ISR).",
  },
  {
    id: "capability-logistics",
    title: "Heavy-Lift Logistics",
    description: "Robust and reliable systems designed for autonomous cargo transport in contested or remote environments.",
  },
  {
    id: "capability-tactical",
    title: "Tactical ISR",
    description: "Man-portable, rapidly deployable drones providing immediate situational awareness to ground forces.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Our Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineered for mission success, our drone systems offer a spectrum of capabilities to meet modern challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const image = PlaceHolderImages.find((img) => img.id === capability.id);
            return (
              <Card 
                key={capability.id} 
                className="overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                {image && (
                  <div className="aspect-w-3 aspect-h-2">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                  <Button variant="link" className="px-0 mt-4 text-accent hover:text-accent/80" suppressHydrationWarning>Learn More</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
