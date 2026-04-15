import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2400),
      setTimeout(() => onComplete(), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-brand-deep transition-opacity duration-700 ${
        phase >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-brand-offwhite/[0.03] transition-opacity duration-1000"
            style={{ opacity: phase >= 1 ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Pink accent block */}
      <div
        className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-brand-pink transition-all duration-1000 ease-out"
        style={{
          transform: phase >= 1 ? "translate(0,0)" : "translate(100%,-100%)",
          opacity: phase >= 1 ? 1 : 0,
        }}
      />

      {/* Yellow accent block */}
      <div
        className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-brand-yellow transition-all duration-1000 ease-out"
        style={{
          transform: phase >= 1 ? "translate(0,0)" : "translate(-100%,100%)",
          opacity: phase >= 1 ? 0.6 : 0,
        }}
      />

      {/* Center content */}
      <div className="relative text-center z-10 px-6">
        {/* Name */}
        <h1
          className="font-display text-7xl sm:text-8xl md:text-9xl text-brand-offwhite tracking-wider transition-all duration-700 ease-out"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(40px)",
          }}
        >
          ALLANA<span className="text-brand-pink">.</span>
        </h1>

        {/* Divider line */}
        <div
          className="mx-auto h-[2px] bg-brand-pink mt-6 transition-all duration-700 ease-out"
          style={{
            width: phase >= 2 ? "120px" : "0px",
          }}
        />

        {/* Subtitle */}
        <p
          className="font-body text-brand-offwhite/50 text-xs md:text-sm tracking-[0.4em] uppercase mt-6 transition-all duration-700 ease-out"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Odontologia & Estética
        </p>

        {/* CRO */}
        <p
          className="font-body text-brand-blue/60 text-[10px] tracking-[0.5em] uppercase mt-3 transition-all duration-500 ease-out"
          style={{
            opacity: phase >= 3 ? 1 : 0,
          }}
        >
          CRO-RJ 53186 · Volta Redonda & Rio de Janeiro
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
