import { RevealSection } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left label */}
          <div className="lg:col-span-4">
            <p className="font-body text-brand-pink text-xs tracking-[0.3em] uppercase font-medium mb-4">Sobre</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.9]">
              ALÉM DO
              <br />
              PROCEDI
              <br />
              MENTO<span className="text-brand-yellow">.</span>
            </h2>
          </div>

          {/* Right content */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <div className="w-16 h-1 bg-brand-pink" />
            <p className="font-body text-foreground/80 text-lg md:text-xl leading-relaxed">
              Sou <strong className="text-foreground font-semibold">Allana</strong>, cirurgiã-dentista em{" "}
              <strong className="text-foreground font-semibold">Volta Redonda</strong> e <strong className="text-foreground font-semibold">Rio de Janeiro</strong>, co-fundadora da{" "}
              <span className="font-editorial italic text-brand-chocolate">Aya Odontologia</span>.
            </p>
            <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed">
              Acredito que um bom tratamento começa muito antes da cadeira: começa na{" "}
              <span className="text-brand-pink font-medium">escuta</span>. Cada pessoa é única, e entender suas
              expectativas, inseguranças e desejos faz parte do cuidado que ofereço.
            </p>
            <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed">
              Meu trabalho é ajudar você a conquistar um sorriso mais natural e confiante — com{" "}
              <span className="font-editorial italic">explicação clara</span> em cada etapa, sem pressa e sem exageros.
              Porque odontologia, pra mim, é sobre{" "}
              <span className="text-brand-chocolate font-semibold">pessoas</span>.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-chocolate flex items-center justify-center">
                <span className="font-display text-brand-offwhite text-lg">A</span>
              </div>
              <div>
                <p className="font-body text-foreground font-semibold text-sm">Dra. Allana</p>
                <p className="font-body text-muted-foreground text-xs">CRO-RJ 53186</p>
              </div>
            </div>
          </div>
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default AboutSection;
