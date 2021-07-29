import Image from "next/image";
import React from "react";
import {
  AiOutlineCaretRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectDetails({ project }) {
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    bottom: "auto",
    zIndex: 2,
  };

  const arrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          ...arrowStyles,
          left: "10px",
        }}
      >
        <BiChevronLeft className="w-10 h-10 transition-all duration-200 text-gray-300 hover:text-white" />
      </button>
    );

  const arrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          ...arrowStyles,
          right: "10px",
        }}
      >
        <BiChevronRight className="w-10 h-10 transition-all duration-200 text-gray-300 hover:text-white" />
      </button>
    );

  return (
    <div className="bg-gray-100">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={arrowPrev}
        renderArrowNext={arrowNext}
      >
        {project.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="Slider Image"
            width={943}
            height={467.6}
            priority={true}
          />
        ))}
      </Carousel>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl">{project.title}</div>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.siteLink}
            className="flex border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-50 p-2 rounded-md transition-all duration-100 items-center"
          >
            Open Site
          </a>
        </div>
        <div className="w-full border-b-2 border-gray-900 mb-4"></div>
        {project.description}
      </div>
    </div>
  );
}
