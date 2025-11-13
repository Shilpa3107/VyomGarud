import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted">
      <div className="container max-w-3xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Ready to elevate your operations? Contact our team to learn more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
