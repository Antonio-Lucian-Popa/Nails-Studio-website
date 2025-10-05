import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Gallery />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
