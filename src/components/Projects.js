import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-light-black">
            <span className="text-pink-700">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 xs:p-5">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-between mt-16 gap-10 pl-20 pr-20 sm:grid sm:grid-cols-3 xs:grid xs:grid-cols-1 xs:justify-items-center">
        {/* ROW 1 */}
        <div className="justify-center text-center items-center p-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>Hashtify</p>
          <p className="pb-5">Hashtag Generator</p>
          <img className="md:h-45" src="./assets/hashtify.png" alt="skill" />
          <div className="flex justify-center text-center items-center gap-5 pt-5">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/backend-hashtag-generator/"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/backend-hashtag-generator/"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="justify-center text-center items-center p-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>Surreal Estate</p>
          <p className="pb-5">Property Search Engine</p>
          <img
            className="md:h-50"
            src="./assets/surreal-estate.png"
            alt="skill"
          />
          <div className="flex justify-center text-center items-center gap-5 pt-5">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/react-surreal-estate"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/backend-hashtag-generator/"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="justify-center text-center items-center p-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>Weather Lens</p>
          <p className="pb-5">Weather Forecasting App</p>
          <img src="./assets/weather-app.png" alt="skill" />
          <div className="flex justify-center text-center items-center gap-5 pt-5">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/backend-hashtag-generator/"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        {/* ROW 2 */}
      </div>
    </section>
  );
};

export default Projects;
