import Link from "next/link";
import UnderLineButton from "./UnderLineButton";

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-8 px-6 bg-gray-100 w-full text-center sm:text-left">
      <div className="mb-2 sm:mb-0">
        <Link href="/" passHref>
          <UnderLineButton
            className="font-bold text-xl"
            text="Brayan M. Beltre"
          />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="#Projects" passHref>
          <UnderLineButton text="Work" />
        </Link>
        <Link href="#About" passHref>
          <UnderLineButton text="About" />
        </Link>
        <Link href="#Contact" passHref>
          <UnderLineButton text="Contact" />
        </Link>
        <Link href="#Other" passHref>
          <UnderLineButton text="Other" />
        </Link>
      </div>
    </nav>
  );
}
