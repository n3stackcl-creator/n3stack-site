import { AgentDemo } from "@/components/AgentDemo";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { Navbar } from "@/components/Navbar";
import { PricingPlans } from "@/components/PricingPlans";
import { Services } from "@/components/Services";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgentDemo />
        <Capabilities />
        <HowWeWork />
        <Services />
        <PricingPlans />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
