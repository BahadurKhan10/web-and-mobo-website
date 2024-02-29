import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Revolution from './components/Revolution';
import Smc from './components/Smc';
import Services from './components/Services';
import Prowly from './components/Prowly';
import Aboutus from './components/Aboutus';
import Accordian from './components/Accordian';
import ChoosePlan from './components/ChoosePlan';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);
  return (
   <>
   <Navbar />
   <Hero />
   <Revolution />
   <Smc />
   <Services />
   <Prowly />
   <Aboutus />
   <Accordian />
   <ChoosePlan />
   <Newsletter />
   <Footer />
   </>
  );
}

export default App;
