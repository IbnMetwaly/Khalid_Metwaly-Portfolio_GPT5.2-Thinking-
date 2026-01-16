import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ImpactNumbers from './components/ImpactNumbers';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <ImpactNumbers />
        <Timeline />
        <Awards />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Khalid Metwaly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
