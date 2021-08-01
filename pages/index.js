import About from '../components/About';
import Contact from '../components/Contact';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import ScrollArrow from '../components/ScrollArrow';
import Section from '../components/Section';

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-all duration-400">
      <Navbar />

      <div className="fixed bottom-8 right-10 invisible md:visible">
        <ScrollArrow />
      </div>
      <div className="px-6 max-w-6xl mx-auto">
        <Landing />

        <Section Name="About">
          <About />
        </Section>

        <Section Name="Projects">
          <Projects />
        </Section>

        <Section Name="Contact">
          <Contact />
        </Section>
      </div>

      <div className="flex flex-col">
        <hr className="border-gray-600 dark:border-gray-50" />
        <p className="w-full text-center my-12 text-gray-600 dark:text-gray-300">
          Brayan M. Beltre © 2021 | All rights reserved
        </p>
      </div>
    </div>
  );
}
