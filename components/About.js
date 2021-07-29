import Image from "next/image";
import Skills from "./Skills";

export default function About() {
  return (
    <div className="flex  flex-col md:grid md:grid-cols-2 md:gap-20 items-center justify-center">
      <div className="w-44 h-44 relative mb-8 md:hidden">
        <Image
          className="rounded-full"
          draggable={false}
          src="/Profile.jpeg"
          alt="Profile Photo"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <p className="text-xl md:text-2xl mb-16">
        I’m a software developer from the Dominican Republic. I’m focused on
        Front-end/Web Development. Furthermore, I love to solve problems and
        create innovative interfaces. <br />I want to improve my skills to
        create interactive webs using micro interactions and animations that
        allows the user to digest the information and guide them in an immersive
        experience.
      </p>
      <div>
        <Skills />
      </div>
    </div>
  );
}
