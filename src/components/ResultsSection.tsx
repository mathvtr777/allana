import { useState } from "react";
import { RevealSection } from "@/hooks/useScrollReveal";

const INSTAGRAM_URL = "https://www.instagram.com/allanasmiledentist/";

const results = [
  {
    image: "/botox.jpeg",
    title: "Botox",
    label: "Estética Facial",
    accent: "bg-brand-pink",
  },
  {
    image: "/clareamento.jpeg",
    title: "Clareamento",
    label: "Clareamento Dental",
    accent: "bg-brand-yellow",
  },
  {
    image: "/preenchimento labial.jpeg",
    title: "Preenchimento Labial",
    label: "Estética Facial",
    accent: "bg-brand-chocolate",
  },
];

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const ResultsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="resultados" className="py-24 md:py-32 bg-brand-deep overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute left-0 right-0 pointer-events-none opacity-5">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-4 md:grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-brand-offwhite hidden md:block" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8">
        <RevealSection>
          {/* Header */}
          <div className="mb-16 md:mb-20 max-w-2xl">
            <p className="font-body text-brand-pink text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Transformações reais
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-brand-offwhite leading-[0.85]">
              RESULTADOS<span className="text-brand-yellow">.</span>
            </h2>
            <p className="font-body text-brand-offwhite/60 text-base md:text-lg mt-6 leading-relaxed">
              Cada sorriso é único. Veja algumas das{" "}
              <span className="font-editorial italic text-brand-offwhite">
                transformações reais
              </span>{" "}
              realizadas com cuidado e precisão.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-brand-offwhite/5">
            {results.map((result, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden bg-brand-deep"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={result.image}
                    alt={`Resultado de ${result.title}`}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hovered === index
                        ? "scale-110 grayscale-0"
                        : "scale-100 grayscale-[20%] contrast-[1.02]"
                    }`}
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent transition-opacity duration-500 ${
                      hovered === index ? "opacity-90" : "opacity-60"
                    }`}
                  />

                  {/* Accent bar */}
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${result.accent} transition-all duration-500 ${
                      hovered === index ? "w-1.5" : "w-1"
                    }`}
                  />

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="font-body text-brand-pink text-xs tracking-[0.25em] uppercase font-medium mb-2">
                      {result.label}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-brand-offwhite tracking-wide">
                      {result.title}
                    </h3>

                    {/* Reveal line on hover */}
                    <div
                      className={`mt-3 h-[2px] bg-brand-pink transition-all duration-500 ${
                        hovered === index ? "w-12" : "w-0"
                      }`}
                    />
                  </div>

                  {/* Index number */}
                  <div className="absolute top-6 right-6 font-display text-6xl text-brand-offwhite/5 leading-none select-none">
                    0{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 md:mt-20 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-results-btn"
              className="group inline-flex items-center gap-3 border-2 border-brand-offwhite/20 text-brand-offwhite font-body font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 hover:border-brand-pink hover:text-brand-pink transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                <InstagramIcon />
              </span>
              Ver mais no Instagram
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default ResultsSection;
