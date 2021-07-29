import Link from "next/link";
import UnderLineButton from "./UnderLineButton";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between py-8 px-6 bg-gray-100 w-full text-center">
      <Link href="/" passHref>
        <UnderLineButton className="font-bold text-3xl">
          Brayan M. Beltre
        </UnderLineButton>
      </Link>
      <div className="flex gap-4 text-2xl">
        <Link href="#About" passHref>
          <UnderLineButton>About</UnderLineButton>
        </Link>
        <Link href="#Projects" passHref>
          <UnderLineButton>Work</UnderLineButton>
        </Link>
        <Link href="#Contact" passHref>
          <UnderLineButton>Contact</UnderLineButton>
        </Link>
      </div>
    </nav>
  );
}
