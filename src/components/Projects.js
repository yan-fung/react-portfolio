import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import hashtifyPic from "../assets/hashtify.png";
import propertyPic from "../assets/surreal-estate.png";
import weatherAppPic from "../assets/weather-app.png";
import nasaAppPic from "../assets/nasa-app.png";
import virtualPetPic from "../assets/virtual-pet.png";
import curiseShipPic from "../assets/ship-app.png";

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-20">
      {/* HEADINGS */}
      <motion.div
        className="md:w-3/4 mx-auto"
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
          <p className="font-playfair font-semibold text-4xl text-light-black text-center ">
            <span className="text-pink-700">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-5 md:text-lg text-sm">
          During my bootcamp course, I had the opportunity to work on various
          projects. Among them, I found the latest ones to be particularly
          enjoyable. These included the Hashtag Generator, Property Search
          Engine, Weather Forecasting App, and NASA Image Search, which allowed
          me to use both front-end and back-end technologies.
        </p>
        <p className="mt-5 md:text-lg text-sm">
          One of the key skills that I learned was how to use React to create
          reusable UI components that can be utilized across multiple pages and
          applications, making it easier to maintain and update the application.
          Additionally, I gained experience in using Express API and Axios to
          retrieve data from my server-side API in my client-side code, which
          helped me to develop a deeper understanding of the communication
          between the front-end and back-end of an application.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="justify-between mt-8 gap-10 pl-5 pr-5 sm:grid sm:grid-cols-3">
        {/* ROW 1 */}
        <div className="justify-center text-center items-center p-5 mb-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>Hashtify</p>
          <p className="pb-5">Hashtag Generator</p>
          <img className="md:h-45" src={hashtifyPic} alt="hastify-app" />
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
              href="https://www.youtube.com/watch?v=7gFWHEathao"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="justify-center text-center items-center p-5 mb-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>Surreal Estate</p>
          <p className="pb-5">Property Search Engine</p>
          <img className="md:h-50" src={propertyPic} alt="property-app" />
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
              href="https://www.youtube.com/watch?v=4aLK9OqdpNA"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="justify-center text-center items-center p-5 mb-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>Weather Lens</p>
          <p className="pb-5">Weather Forecasting App</p>
          <img src={weatherAppPic} alt="weather-app" />
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
              href="https://www.youtube.com/watch?v=4SpSWTrW7kM"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="justify-center text-center items-center p-5 mb-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>NASA Image Search</p>
          <p className="pb-5">Mock Technical Test</p>
          <img className="md:h-45" src={nasaAppPic} alt="nasa-app" />
          <div className="flex justify-center text-center items-center gap-5 pt-5">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/react-technical-test"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.youtube.com/watch?v=EmaQ46e7ikE"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="justify-center text-center items-center p-5 mb-5 rounded-md bg-white max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          <p>My Virtual Pet Peipei </p>
          <p className="pb-5">Virtual Pet App</p>
          <img className="md:h-45" src={virtualPetPic} alt="virtual-pet-app" />
          <div className="flex justify-center text-center items-center gap-5 pt-5">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/virtual-pet-gui"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.youtube.com/shorts/lrt6nMJEDy4"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
        <div className="justify-center text-center items-center p-5 rounded-md bg-white max-w-[400px] max-h-[385px] text-2xl font-playfair font-semibold">
          <p>Cruise Ship</p>
          <p className="pb-5">Cruise Ship GUI App</p>
          <img
            className="md:h-45 pt-2"
            src={curiseShipPic}
            alt="cruise-ship-app"
          />
          <div className="flex justify-center text-center items-center gap-5 pt-5">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://github.com/yan-fung/cruise-ships-gui"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.youtube.com/watch?v=jhO5D72lpHw"
              target="_blank"
              rel="noreferrer"
            >
              DEMO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
