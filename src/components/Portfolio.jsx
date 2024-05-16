import React from "react";
import Vinted from "../assets/portfolio/Vinted.png";
import FrontEndMentor1 from "../assets/portfolio/FrontEndMentor1.png";
import FrontEndMentor2 from "../assets/portfolio/FrontEndMentor2.png";
import Marvel from "../assets/portfolio/Marvel.png";
import Netflix from "../assets/portfolio/Netflix.png";
import TripAdvisor from "../assets/portfolio/TripAdvisor.png";
import TheFork from "../assets/portfolio/TheFork.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Vinted,
      liveUrl: "https://vintd.netlify.app/",
      codeUrl: "https://github.com/ashmoune/Vinted-frontend",
    },
    {
      id: 2,
      src: TheFork,
      liveUrl: "https://spoon-fork.netlify.app/",
      codeUrl: "https://github.com/ashmoune/Fork-Spoon-Frontend",
    },
    {
      id: 3,
      src: TripAdvisor,
      liveUrl: "https://spoon-fork.netlify.app/",
      codeUrl: "https://github.com/ashmoune/Tripadvisor",
    },
    {
      id: 4,
      src: Netflix,
      liveUrl: "https://web-films.netlify.app/",
      codeUrl: "https://github.com/ashmoune/netflix",
    },
    {
      id: 5,
      src: Marvel,
      liveUrl: "https://hmmarvel.netlify.app/",
      codeUrl: "https://github.com/ashmoune/Marvel-front",
    },
    {
      id: 6,
      src: FrontEndMentor2,
      liveUrl: "https://ashmoune.github.io/agecalculator/",
      codeUrl: "https://github.com/ashmoune/agecalculator",
    },
    {
      id: 7,
      src: FrontEndMentor1,
      liveUrl: "https://ashmoune.github.io/previewcard/",
      codeUrl: "https://github.com/ashmoune/previewcard",
    },
  ];
  return (
    <main
      name="portfolio"
      className="bg-gradient-to-b from-black to-violet-950 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6"> Mes projets</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveUrl, codeUrl }) => (
            <div className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                key={id}
                src={src}
                alt=""
                className="rounded-md
             duration-200 hover:scale-105 w-full h-40 object-cover 
             "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={liveUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codeUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
