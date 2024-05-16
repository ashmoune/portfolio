import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: html,
      name: "html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      name: "css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: github,
      name: "github",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: javascript,
      name: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: node,
      name: "node",
      style: "shadow-lime-400",
    },
    {
      id: 6,
      src: tailwind,
      name: "tailwind",
      style: "shadow-cyan-300",
    },
    {
      id: 7,
      src: mongodb,
      name: "mongodb",
      style: "shadow-cyan-200",
    },
    {
      id: 8,
      src: react,
      name: "react",
      style: "shadow-cyan-400",
    },
  ];
  return (
    <>
      <main
        name="experience"
        className="bg-gradient-to-b from-violet-950 to-black w-full md:min-h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Experience
            </p>
            <p className="py-6">Technologie avec lesquelles j'ai travaillé</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {experiences.map(({ id, src, name, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
