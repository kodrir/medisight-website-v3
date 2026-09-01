import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HurdlesHandled } from "@/components/solutions/HurdlesHandled";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsBand } from "@/components/StatsBand";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Reveal } from "@/components/Reveal";
import { SolutionCards } from "@/components/SolutionCards";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { operationsHurdles, operationsHurdlesPayoff } from "@/lib/solutions";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HurdlesHandled
          eyebrow="Less friction"
          heading="Hurdles, handled"
          hurdles={operationsHurdles}
          payoff={operationsHurdlesPayoff}
        />
        <StatsBand />
        <SolutionCards />

        <HowItWorks />

        <section className="bg-slate-50/70 py-20 md:py-28">
          <div className="container-content">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  What could this mean for your team?
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="mt-10">
              <p className="eyebrow mb-3 text-center opacity-70">
                drag the sliders for an estimate
              </p>
              <RoiCalculator />
            </Reveal>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </>
  );
}
