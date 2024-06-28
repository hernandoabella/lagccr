import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Team from "@/app/components/Team";
import Services from "@/app/components/Services";
import Counter from "@/app/components/Counter";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

const app = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Team />
      <Counter />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default app;
