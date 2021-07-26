import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Proyects from "../components/Proyects";
import Section from "../components/Section";
import About from "../components/About";
import Contact from "../components/Contact";
import ScrollArrow from "../components/ScrollArrow";

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      {/* header */}
      <Navbar />

      {/* Back to top */}
      <div className="fixed bottom-8 right-10 ">
        <ScrollArrow />
      </div>
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        {/* landing */}
        <Landing />
        {/* Projects */}
        <Section Name="Projects">
          <Proyects />
        </Section>

        {/* about me */}
        <Section Name="About">
          <About />
        </Section>

        {/* contact */}
        <Section Name="Contact">
          <Contact />
        </Section>
      </div>

      {/* footer */}
      <div className="flex flex-col">
        <hr className="border-gray-600" />
        <p className="w-full text-center my-12 text-gray-600">
          Copyright © 2020 Besnik Creative
        </p>
      </div>
    </div>
  );
}
