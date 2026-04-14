import { RevealSection } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/5524999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

const FinalCTASection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-brand-pink overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/20" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-deep/10" />
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <RevealSection>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-brand-offwhite leading-[0.85]">
            BORA
            <br />
            TRANSFORMAR
            <br />
            SEU SORRISO
            <span className="text-brand-yellow">?</span>
          </h2>

          <p className="font-body text-brand-offwhite/80 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Agende sua avaliação e descubra como cuidar do seu sorriso com{" "}
            <span className="font-editorial italic text-brand-offwhite">naturalidade, segurança e acolhimento</span>.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-deep text-brand-offwhite font-body font-semibold text-sm tracking-wide uppercase px-10 py-5 hover:bg-brand-chocolate transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl"
          >
            Agendar Pelo WhatsApp
          </a>

          <p className="font-body text-brand-offwhite/50 text-xs tracking-widest uppercase">
            Volta Redonda · RJ
          </p>
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default FinalCTASection;
