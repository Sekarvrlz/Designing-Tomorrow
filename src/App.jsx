import { useState } from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { WelcomeScreen } from "./components/WelcomeScreen";
import "./styles/welcome.css";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {showWelcome ? (
        <WelcomeScreen onContinue={() => setShowWelcome(false)} />
      ) : (
        <>
          <Header />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}
