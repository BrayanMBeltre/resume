import Link from 'next/link';
import ThemeSwitch from './themeSwitch';
import UnderLineButton from './UnderLineButton';

export default function Navbar() {
  return (
    <nav className="md:flex md:flex-row md:justify-between  py-8 px-6 bg-gray-100 dark:bg-gray-900 dark:text-gray-50  w-full text-center ">
      <div className="mb-8 md:mb-0">
        <Link href="/" passHref>
          <UnderLineButton className="font-bold text-3xl">
            Brayan M. Beltre
          </UnderLineButton>
        </Link>
      </div>
      <div className="flex gap-4 text-2xl text-center justify-center items-center">
        <Link href="#About" passHref>
          <UnderLineButton>About</UnderLineButton>
        </Link>
        <Link href="#Projects" passHref>
          <UnderLineButton>Work</UnderLineButton>
        </Link>
        <Link href="#Contact" passHref>
          <UnderLineButton>Contact</UnderLineButton>
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
