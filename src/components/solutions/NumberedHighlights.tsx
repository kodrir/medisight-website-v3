import { Reveal } from "@/components/Reveal";

export interface NumberedHighlight {
  number: string;
  title: string;
  body: string;
}

interface NumberedHighlightsProps {
  eyebrow: string;
  heading: string;
  items: NumberedHighlight[];
  videoSrc?: string;
  videoPoster?: string;
}

export function NumberedHighlights({
  eyebrow,
  heading,
  items,
  videoSrc,
  videoPoster,
}: NumberedHighlightsProps) {
  if (videoSrc) {
    return (
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="grid min-h-[28rem] lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[16rem] overflow-hidden lg:min-h-full">
            <video
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={videoPoster}
              aria-hidden
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/80 lg:bg-gradient-to-l lg:from-transparent lg:to-white"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-14 md:px-8 lg:py-20">
            <Reveal>
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">{heading}</h2>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {items.map((item, i) => (
                <Reveal as="li" key={item.number} delay={0.04 + i * 0.06} className="list-none">
                  <article className="flex gap-5 md:gap-6">
                    <span className="text-2xl font-bold tabular-nums text-primary-200 md:text-3xl">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink md:text-xl">{item.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-600 md:text-base">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-slate-200 bg-white py-20 md:py-28">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">{heading}</h2>
          </div>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-3xl gap-8 md:gap-10">
          {items.map((item, i) => (
            <Reveal as="li" key={item.number} delay={i * 0.06} className="list-none">
              <article className="flex gap-5 md:gap-6">
                <span className="text-2xl font-bold tabular-nums text-primary-200 md:text-3xl">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink md:text-xl">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate-600 md:text-base">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
