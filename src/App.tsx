import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Benefits } from "./components/sections/Benefits";
import { Stats } from "./components/sections/Stats";
import { Process } from "./components/sections/Process";
import { FAQ } from "./components/sections/FAQ";
import { Testimonials } from "./components/sections/Testimonials";
import { ContactForm } from "./components/sections/ContactForm";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Stats />
        <Process />
        <FAQ />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;