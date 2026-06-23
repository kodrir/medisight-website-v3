import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkflowContext } from "@/components/WorkflowContext";
import { AgentsGrid } from "@/components/AgentsGrid";
import { PlatformCredibility } from "@/components/PlatformCredibility";
import { PlatformDiagram } from "@/components/PlatformDiagram";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkflowContext />
        <AgentsGrid />
        <PlatformDiagram />
        <PlatformCredibility />
        <WhoItsFor />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
