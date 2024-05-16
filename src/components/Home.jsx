import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";
// import heroImage from "../assets/heroImage.png";
import heroImage from "../assets/heroImage2.jpg";

const Home = () => {
  return (
    <main
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black to-indigo-950 "
    >
      <section className="max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row sm:pt-20">
        <div className="flex flex-col justify-center h-full ml-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Bonjour, je suis Hadrien, web developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Web developer passionné par la création de sites web qui marquent
            les esprits et simplifient la vie
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-600 to-indigo-800 cursor-pointer space-x-1"
            >
              <span className="mr-2">Portfolio</span>
              <span className="group-hover:rotate-90 duration-500">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/4 md:w-full "
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
