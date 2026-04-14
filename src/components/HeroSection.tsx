import heroImg from "@/assets/hero-allana.jpg";

const WHATSAPP_URL = "https://wa.me/5524999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-brand-deep overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-brand-offwhite/5 hidden md:block" />
        ))}
      </div>

      <div className="relative container mx-auto px-6 md:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-20 lg:py-0">
          {/* Text block */}
          <div className="lg:col-span-6 xl:col-span-5 z-10 space-y-8">
            <div className="space-y-3">
              <p className="font-body text-brand-pink text-sm tracking-[0.3em] uppercase font-medium">
                Alinhador Invisível · Odontologia & Estética
              </p>
              <p className="font-body text-brand-blue text-xs tracking-widest uppercase">
                CRO-RJ 53186 · Volta Redonda
              </p>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl xl:text-9xl leading-[0.85] text-brand-offwhite tracking-tight">
              SEU SORRISO
              <br />
              <span className="text-brand-pink">MERECE</span>
              <br />
              CUIDADO
              <span className="text-brand-yellow">.</span>
            </h1>

            <p className="font-body text-brand-offwhite/70 text-base md:text-lg max-w-md leading-relaxed">
              Odontologia estética com{" "}
              <span className="font-editorial italic text-brand-offwhite">escuta, naturalidade</span>{" "}
              e resultados que respeitam quem você é.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-pink text-brand-offwhite font-body font-semibold text-sm tracking-wide uppercase px-8 py-4 hover:bg-brand-pink/90 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Agendar Avaliação
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-offwhite/30 text-brand-offwhite font-body font-medium text-sm tracking-wide uppercase px-8 py-4 hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300"
              >
                Conhecer Tratamentos
              </a>
            </div>
          </div>

          {/* Image block */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative">
              {/* Yellow accent block */}
              <div className="absolute -top-4 -right-4 w-32 h-32 md:w-48 md:h-48 bg-brand-yellow z-0" />
              {/* Pink accent block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-36 md:h-36 bg-brand-pink z-0" />
              <img
                src={heroImg}
                alt="Dra. Allana — Cirurgiã-dentista especialista em alinhador invisível"
                className="relative z-10 w-full h-[500px] md:h-[650px] object-cover object-top grayscale-[20%] contrast-[1.05]"
                width={896}
                height={1152}
              />
              {/* Name overlay */}
              <div className="absolute bottom-6 right-6 z-20 bg-brand-deep/90 px-6 py-3">
                <p className="font-display text-3xl md:text-4xl text-brand-offwhite tracking-wide">ALLANA</p>
                <p className="font-body text-brand-pink text-xs tracking-widest uppercase">Aya Odontologia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-pink" />
    </section>
  );
};

export default HeroSection;
