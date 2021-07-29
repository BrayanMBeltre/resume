import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="grid grid-cols-2 items-center mb-24 ">
      <div className="z-10">
        <h2 className="text-4xl mb-8">Hello There, I’m</h2>
        <h1 className="text-5xl font-bold mb-4 mix-blend-exclusion">
          Brayan Montaño Beltre
        </h1>
        <h2 className="text-3xl font-bold text-gray-600 mb-8">
          Front-end Developer
        </h2>
        <Link href="#About">
          <a className="py-2 px-6 border-2 border-gray-900 text-gray-900 hover:bg-gray-900  hover:text-gray-50 rounded-md transition-all duration-100">
            About Me
          </a>
        </Link>
      </div>

      <div className="flex justify-center transform -translate-x-32 z-0">
        <Image
          src="/Profile.jpeg"
          alt="Profile Photo"
          width={384}
          height={512}
          priority={true}
        />
      </div>
    </div>
  );
}
