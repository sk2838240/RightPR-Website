import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Mission from './components/Mission';
import Services from './components/Services';
import SMEIPO from './components/SMEIPO';
import Portfolio from './components/Portfolio';
import Awards from './components/Awards';
import CaseStudies from './components/CaseStudies';
import News from './components/News';
import Team from './components/Team';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-royal-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Mission />
      <Services />
      <SMEIPO />
      <Portfolio />
      <Awards />
      <CaseStudies />
      <News />
      <Team />
      <Founder />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
