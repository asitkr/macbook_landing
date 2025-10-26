import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Performance from './components/Performance';
import ProductViewer from './components/ProductViewer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
