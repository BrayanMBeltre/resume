import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import UnderLineButton from './UnderLineButton';

export default function Navbar() {
  return (
    <nav className="md:flex md:flex-row md:justify-between max-w-6xl mx-auto py-8 px-6   dark:text-gray-50  w-full text-center">
      <div className="mb-8 md:mb-0">
        <Link href="/" passHref>
          <UnderLineButton className="font-bold text-3xl">
            Brayan M. Beltre
          </UnderLineButton>
        </Link>
      </div>
      <div className="flex gap-4 text-2xl text-center justify-center items-center">
        <a href="#About">
          <UnderLineButton>About</UnderLineButton>
        </a>
        <a href="#Projects">
          <UnderLineButton>Work</UnderLineButton>
        </a>
        <a href="#Contact">
          <UnderLineButton>Contact</UnderLineButton>
        </a>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
