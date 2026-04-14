const differentials = [
  {
    number: "01",
    title: "ATENDIMENTO HUMANIZADO",
    description: "Você é ouvido antes de qualquer procedimento. Aqui, o cuidado começa na conversa.",
  },
  {
    number: "02",
    title: "EXPLICAÇÃO CLARA",
    description: "Cada etapa é explicada com transparência, para que você se sinta seguro e bem informado.",
  },
  {
    number: "03",
    title: "RESULTADOS NATURAIS",
    description: "Nada de exageros. O objetivo é realçar sua beleza com sutileza e harmonia.",
  },
  {
    number: "04",
    title: "CUIDADO PERSONALIZADO",
    description: "Tratamentos pensados exclusivamente para você, respeitando seu tempo e suas necessidades.",
  },
  {
    number: "05",
    title: "ESTÉTICA SEM EXCESSOS",
    description: "Menos é mais. A beleza está na naturalidade e no equilíbrio.",
  },
  {
    number: "06",
    title: "VOCÊ, NÃO UM CASO",
    description: "Aqui, cada paciente é uma pessoa — não um número ou caso clínico.",
  },
];

import { RevealSection } from "@/hooks/useScrollReveal";

const DifferentialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-deep">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
        <div className="mb-16 md:mb-20">
          <p className="font-body text-brand-yellow text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Diferenciais
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-brand-offwhite leading-[0.85]">
            POR QUE
            <br />
            <span className="text-brand-pink">ALLANA</span>
            <span className="text-brand-yellow">?</span>
          </h2>
        </div>

        </RevealSection>
        <RevealSection delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-offwhite/10">
          {differentials.map((item) => (
            <div
              key={item.number}
              className="bg-brand-deep p-8 md:p-10 group hover:bg-brand-chocolate/30 transition-colors duration-500"
            >
              <span className="font-display text-brand-pink text-4xl block mb-4">{item.number}</span>
              <h3 className="font-display text-2xl md:text-3xl text-brand-offwhite mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-body text-brand-offwhite/60 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="w-0 group-hover:w-full h-[2px] bg-brand-pink transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default DifferentialsSection;
