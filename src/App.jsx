import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import DoctorList from "./components/DoctorList";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloatButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink dark:bg-pine-900 dark:text-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <DoctorList />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}
