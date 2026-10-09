import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Solutions from "./components/Solutions";
import Segments from "./components/Segments";
import HowItWorks from "./components/HowItWorks";
import Differentials from "./components/Differentials";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-liv-black min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Solutions />
      <Segments />
      <HowItWorks />
      <Differentials />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}