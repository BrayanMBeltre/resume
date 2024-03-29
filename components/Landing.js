import Image from 'next/image';

export default function Landing() {
  return (
    <div className="md:grid md:grid-cols-12 justify-center items-center mb-40 md:mb-24 text-center md:text-left mt-16 md:mt-0">
      <div className="col-span-7 z-10">
        <h1 className="text-2xl md:text-5xl dark:text-gray-50 mb-12">
          I’m Brayan Montaño Beltre software developer from the Dominican
          Republic. I’m focused on Front-end/Web Development.
        </h1>
        <a
          href="#About"
          className="py-2 px-6 border-2 border-gray-900 dark:border-gray-50 text-gray-900 dark:text-gray-50 hover:bg-gray-900  dark:hover:bg-gray-50 hover:text-gray-50 dark:hover:text-gray-900 rounded-md transition-all duration-100"
        >
          More About Me
        </a>
      </div>
      <div className="col-span-5 hidden md:flex justify-center z-0 ">
        <Image
          draggable={false}
          src="/Profile.jpeg"
          alt="Profile Photo"
          width={384}
          height={512}
          priority={true}
          blurDataURL="/Profile.jpeg"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
