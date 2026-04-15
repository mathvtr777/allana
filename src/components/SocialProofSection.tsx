import smileImg from "/imagens/allana.jpeg";

const testimonials = [
  {
    text: "Desde a primeira consulta me senti acolhido. A Allana explica tudo com calma e nos faz sentir segurança real.",
    name: "Paciente",
    detail: "Alinhador Invisível",
  },
  {
    text: "Nunca imaginei que ir ao dentista pudesse ser uma experiência tão tranquila. Resultado incrível e super natural.",
    name: "Paciente",
    detail: "Clareamento Dental",
  },
  {
    text: "O cuidado é genuíno. Ela realmente se importa com o que você sente e quer. Recomendo de olhos fechados.",
    name: "Paciente",
    detail: "Estética do Sorriso",
  },
];

import { RevealSection } from "@/hooks/useScrollReveal";

const SocialProofSection = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-deep">
      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="font-body text-brand-pink text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Confiança
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-brand-offwhite leading-[0.85] mb-8">
              QUEM JÁ
              <br />
              <span className="text-brand-yellow">SORRIU</span>
              <span className="text-brand-pink">.</span>
            </h2>
            <div className="relative">
              <img
                src={smileImg}
                alt="Dra. Allana, cirurgiã-dentista"
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-brand-pink/10" />
            </div>
          </div>

          {/* Right — Testimonials */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border-b border-brand-offwhite/10 py-8 md:py-10"
              >
                <p className="font-editorial italic text-brand-offwhite text-lg md:text-xl leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-brand-pink" />
                  <p className="font-body text-brand-offwhite/50 text-xs tracking-widest uppercase">
                    {testimonial.name} — {testimonial.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default SocialProofSection;
