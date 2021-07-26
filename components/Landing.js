import Image from "next/image";

export default function Landing() {
  return (
    <div className="grid grid-cols-2 items-center mb-24">
      <div className="text-5xl z-10">
        I’m Brayan Montaño Beltre software developer from the Dominican
        Republic. I’m focused on Front-end/Web Development.
      </div>
      <div className="flex justify-center transform -translate-x-32 z-0">
        <Image src="/Owl.png" alt="Profile Photo" width={606} height={564} />
      </div>
    </div>
  );
}
