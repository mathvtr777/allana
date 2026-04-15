const FooterSection = () => {
  return (
    <footer className="bg-brand-deep py-12 border-t border-brand-offwhite/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-xl text-brand-offwhite tracking-wider">
              ALLANA<span className="text-brand-pink">.</span>
            </p>
            <p className="font-body text-brand-offwhite/40 text-xs mt-1">
              CRO-RJ 53186 · Volta Redonda & Rio de Janeiro, RJ
            </p>
          </div>
          <p className="font-body text-brand-offwhite/30 text-xs">
            © {new Date().getFullYear()} Allana — Aya Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
