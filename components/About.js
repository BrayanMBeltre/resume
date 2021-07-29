import Skills from "./Skills";

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-20 items-center">
      <p className="text-2xl">
        I’m a software developer from the Dominican Republic. I’m focused on
        Front-end/Web Development. Furthermore, I love to solve problems and
        create innovative interfaces. <br />I want to improve my skills to
        create interactive webs using micro interactions and animations that
        allows the user to digest the information and guide them in an immersive
        experience.
      </p>
      <Skills />
    </div>
  );
}
