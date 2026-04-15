const services = [
  {
    title: "ALINHADOR INVISÍVEL",
    description: "Alinhamento discreto e confortável, sem a estética do aparelho convencional. Ideal para quem busca praticidade e resultados visíveis com liberdade no dia a dia.",
    accent: "bg-brand-pink",
  },
  {
    title: "CLAREAMENTO DENTAL",
    description: "Dentes mais brancos com segurança e acompanhamento profissional. Um sorriso luminoso que reflete sua vitalidade.",
    accent: "bg-brand-yellow",
  },
  {
    title: "ALINHAMENTO DENTAL",
    description: "Correção da posição dos dentes com planejamento individualizado, buscando equilíbrio funcional e estético.",
    accent: "bg-brand-chocolate",
  },
  {
    title: "RECONTORNO",
    description: "Dando um novo formato aos seus dentes isso sem desgastes. Transformando seu sorriso no mesmo dia.",
    accent: "bg-brand-pink",
  },
  {
    title: "HARMONIZAÇÃO",
    description: "Tratamentos com toxina botulínica como prevenção de rugas e preenchimento labial, pra devolver hidratação e volume a lábios finos.",
    accent: "bg-brand-yellow",
  },
];

import { RevealSection } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="font-body text-brand-pink text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Tratamentos
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.85]">
            SERVIÇOS<span className="text-brand-yellow">.</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg mt-6 leading-relaxed">
            Cada tratamento é pensado com cuidado, respeitando suas expectativas e buscando o melhor resultado{" "}
            <span className="font-editorial italic text-foreground">para você</span>.
          </p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-t border-foreground/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:pl-4 transition-all duration-500"
            >
              <div className={`w-3 h-3 ${service.accent} shrink-0 group-hover:scale-150 transition-transform duration-300`} />
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground tracking-wide flex-1">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default ServicesSection;
