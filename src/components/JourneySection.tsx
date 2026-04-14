const steps = [
  {
    number: "01",
    title: "Escuta & Avaliação",
    description: "Conversa inicial para entender suas necessidades, expectativas e histórico.",
  },
  {
    number: "02",
    title: "Planejamento Personalizado",
    description: "Análise detalhada e plano de tratamento feito sob medida para você.",
  },
  {
    number: "03",
    title: "Melhor Tratamento",
    description: "Definição da abordagem ideal, com explicação clara de cada etapa.",
  },
  {
    number: "04",
    title: "Acompanhamento Próximo",
    description: "Suporte contínuo durante todo o tratamento, com atenção e cuidado.",
  },
  {
    number: "05",
    title: "Resultado Natural",
    description: "Foco em bem-estar e um resultado que respeita sua identidade.",
  },
];

import { RevealSection } from "@/hooks/useScrollReveal";

const JourneySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <p className="font-body text-brand-pink text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Como Funciona
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.85]">
            SUA JORNADA<span className="text-brand-yellow">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 border-l-2 md:border-l-0 md:border-t-2 border-foreground/10 hover:border-brand-pink transition-colors duration-300 group"
            >
              <span className="font-display text-5xl text-brand-pink/20 group-hover:text-brand-pink/50 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-foreground mt-2 tracking-wide">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default JourneySection;
