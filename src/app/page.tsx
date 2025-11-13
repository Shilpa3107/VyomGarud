import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import Capabilities from "@/components/landing/capabilities";
import Highlights from "@/components/landing/highlights";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
