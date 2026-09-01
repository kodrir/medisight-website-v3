import { Reveal } from "./Reveal";

const stats = [
  { value: "Personal", label: "Clinical insights" },
  { value: "24/7", label: "Workflow automation" },
  { value: "100%", label: "Traceable outputs" },
  { value: "Epic", label: "HL7/FHIR integration" },
];

export function StatsBand() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/60 py-10">
      <div className="container-content">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 0.04} className="list-none text-center">
              <p className="text-3xl font-bold tracking-tight text-primary-700 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
