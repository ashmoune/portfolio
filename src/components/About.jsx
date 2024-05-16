import React from "react";

const About = () => {
  return (
    <main
      name="A propos"
      className="w-full min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white flex flex-col px-4 "
    >
      <section className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            A propos
          </p>
        </div>
        <p className="text-xl mt-20">
          Bonjour, je m'appelle Hadrien Monniot. Issu initialement du secteur de
          la restauration où j'exerçais en tant que second de cuisine, j'ai
          entamé une reconversion dans le développement web en autodidacte au
          cours de l'année 2023. Mon intérêt grandissant pour ce domaine m'a
          conduit à suivre une formation de niveau RNCP 5 au Réacteur en février
          2024.
        </p>
        <br />
        <p className="text-xl">
          Je suis actuellement à la recherche d'un stage ou d'une alternance.
          <br />
          Me familiarisant avec des technologies telles que React, Node.js,
          Express, Tailwind, et TypeScript, je continue sans cesse d'apprendre,
          étant curieux et passionné par le domaine du developpement web. Je
          continue donc à travailler chaque jour avec envie, motivation et des
          idées plein la tête.
        </p>
      </section>
    </main>
  );
};

export default About;
