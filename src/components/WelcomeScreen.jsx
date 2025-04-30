import { useState, useEffect } from "react";
import "../styles/welcome.css";

export function WelcomeScreen({ onContinue }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000); // setelah 2 detik mulai fade out
    const timer2 = setTimeout(() => onContinue(), 2700); // total 2.7 detik pindah ke page utama

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onContinue]);

  return (
    <div
      className={`welcome-bg flex flex-col items-center justify-center h-screen text-white text-center px-4 transition-all duration-1000 ease-in-out transform ${
        fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-110"
      }`}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
        Selamat Datang!
      </h1>
      <p className="mb-8 text-lg md:text-xl animate-fadeIn delay-200">
        Portofolio Sekar Avriliza Putri
      </p>
    </div>
  );
}
