import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5524999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-deep/95 backdrop-blur-sm border-b border-brand-offwhite/5">
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-brand-offwhite tracking-wider">
          ALLANA<span className="text-brand-pink">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="font-body text-brand-offwhite/60 text-xs tracking-widest uppercase hover:text-brand-pink transition-colors">Sobre</a>
          <a href="#servicos" className="font-body text-brand-offwhite/60 text-xs tracking-widest uppercase hover:text-brand-pink transition-colors">Serviços</a>
          <a href="#resultados" className="font-body text-brand-offwhite/60 text-xs tracking-widest uppercase hover:text-brand-pink transition-colors">Resultados</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-pink text-brand-offwhite font-body font-semibold text-xs tracking-wide uppercase px-6 py-2.5 hover:bg-brand-pink/90 transition-colors"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-7"
          aria-label="Menu"
        >
          <span className={`block h-[2px] bg-brand-offwhite transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block h-[2px] bg-brand-offwhite transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] bg-brand-offwhite transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-deep border-t border-brand-offwhite/5 px-6 py-6 space-y-4">
          <a href="#sobre" onClick={() => setOpen(false)} className="block font-body text-brand-offwhite/70 text-sm tracking-widest uppercase">Sobre</a>
          <a href="#servicos" onClick={() => setOpen(false)} className="block font-body text-brand-offwhite/70 text-sm tracking-widest uppercase">Serviços</a>
          <a href="#resultados" onClick={() => setOpen(false)} className="block font-body text-brand-offwhite/70 text-sm tracking-widest uppercase">Resultados</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-brand-pink text-brand-offwhite font-body font-semibold text-sm tracking-wide uppercase px-6 py-3 text-center"
          >
            Agendar
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
