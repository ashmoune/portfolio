import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className=" h-full w-full bg-gradient-to-b from-black to-purple-950 p-4 text-white"
      >
        <div className="ml-10 flex flex-col p-4 justify-center max-w-screen mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-6">
              Entrez vos informations pour rentrer en contact avec moi
            </p>
          </div>
        </div>
        <div className="ml-10 flex justify-center items-center">
          <form
            action="https://getform.io/f/pbmqrgrb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Nom"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Mail"
              className="my-4  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Entrez votre message ici "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
