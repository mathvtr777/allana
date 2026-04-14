const items = [
  "Deseja alinhar os dentes com discrição",
  "Quer clarear o sorriso com segurança",
  "Busca estética natural, sem exageros",
  "Valoriza atendimento acolhedor e explicações claras",
  "Deseja se sentir mais confiante ao sorrir",
];

import { RevealSection } from "@/hooks/useScrollReveal";

const ForWhoSection = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-chocolate">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-body text-brand-yellow text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Para quem é
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-brand-offwhite leading-[0.85]">
              VOCÊ SE
              <br />
              IDENTIFICA
              <span className="text-brand-pink">?</span>
            </h2>
            <p className="font-body text-brand-offwhite/60 text-base mt-6 leading-relaxed max-w-sm">
              Se você se reconhece em alguma dessas situações, talvez seja o momento de dar o próximo passo.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="border-b border-brand-offwhite/15 py-6 md:py-8 flex items-start gap-6 group"
              >
                <span className="font-display text-brand-pink text-2xl mt-1 shrink-0">→</span>
                <p className="font-body text-brand-offwhite text-lg md:text-xl leading-relaxed group-hover:text-brand-yellow transition-colors duration-300">
                  Para quem {item.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default ForWhoSection;
