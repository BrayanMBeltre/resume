import React from "react";
import { BsGearFill } from "react-icons/bs";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import {
  SiApollographql,
  SiBootstrap,
  SiGit,
  SiNextDotJs,
  SiReact,
  SiSquarespace,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="grid grid-cols-3 gap-y-6">
      <div className="grid justify-items-center">
        <IoLogoJavascript className="w-16 h-16" />
        <p className="text-xl">JavaScript</p>
      </div>

      <div className="grid justify-items-center">
        <IoLogoHtml5 className="w-16 h-16" />
        <p className="text-xl">HTML</p>
      </div>

      <div className="grid justify-items-center">
        <IoLogoCss3 className="w-16 h-16" />
        <p className="text-xl">CSS</p>
      </div>

      <div className="grid justify-items-center">
        <SiGit className="w-16 h-16" />
        <p className="text-xl">Git</p>
      </div>

      <div className="grid justify-items-center">
        <SiTailwindcss className="w-16 h-16" />
        <p className="text-xl">Tailwind CSS</p>
      </div>

      <div className="grid justify-items-center">
        <SiBootstrap className="w-16 h-16" />
        <p className="text-xl">Bootstrap</p>
      </div>

      <div className="grid justify-items-center">
        <SiReact className="w-16 h-16" />
        <p className="text-xl">React</p>
      </div>

      <div className="grid justify-items-center">
        <SiNextDotJs className="w-16 h-16" />
        <p className="text-xl">Next.js</p>
      </div>

      <div className="grid justify-items-center">
        <SiApollographql className="w-16 h-16" />
        <p className="text-xl">GraphQL</p>
      </div>

      <div className="grid justify-items-center">
        <SiWordpress className="w-16 h-16" />
        <p className="text-xl">WordPress</p>
      </div>

      <div className="grid justify-items-center">
        <SiSquarespace className="w-16 h-16" />
        <p className="text-xl">SquareSpace</p>
      </div>

      <div className="grid justify-items-center">
        <BsGearFill className="w-16 h-16 animate-spin-slow" />
        <p className="text-xl">Working...</p>
      </div>
    </div>
  );
}
