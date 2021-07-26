import Image from "next/image";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Proyects() {
  const proyects = [
    {
      title: "P1",
      src: "/Proyect1.png",
      alt: "Proyect 1 Picture",
    },
    {
      title: "P2",
      src: "/Proyect2.png",
      alt: "Proyect 2 Picture",
    },
    {
      title: "P3",
      src: "/Proyect3.png",
      alt: "Proyect 3 Picture",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-6">
      {proyects.map((proyect, i) => (
        <Link key={i} href="/new">
          <div className="flex justify-center">
            <a href="">
              <p className="text-2xl mb-4 ">
                0{i} {proyect.title}
              </p>
              <Image
                src={proyect.src}
                alt={proyect.alt}
                width={296}
                height={446.4}
              />
            </a>
          </div>
        </Link>
      ))}
      <Link href="/new">
        <a className="mt-16 ml-4 p-4 border-2 border-gray-900 rounded-full">
          <BiPlus className="w-6 h-6" />
        </a>
      </Link>
    </div>
  );
}
