import React from "react";
import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const MySkills = () => {
  const isAboveMediumSrceens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-5 pb-24">
      {/* HEADER AND IMGAGE SECTION */}
      <div className="md:flex md:justify-between gap-16 mt-32">
        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-light-black">
            MY <span className="text-pink-700">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 rm-7 md:text-lg text-sm">
            I received training to become a full stack developer from a bootcamp
            course from Command Shift. Starting with the basic concepts of
            programming, I progressed to building web applications using the
            React framework with API servers and databases. Through this
            experience, I gained a solid understanding of how front-end and
            back-end technologies work together, as well as best practices such
            as Test-Driven Development and Object-Oriented Programming.
          </p>
          <div className="pt-5 md:text-lg text-sm">
            Throughout the bootcamp, I completed several challenging coding
            projects, including a web application that involved integrating
            databases. Even after finishing the course, I continue to learn and
            explore new technologies by building projects in my free time.
          </div>
        </motion.div>
        <div className="mt-16 md:text-lg text-sm">
          {isAboveMediumSrceens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
        before:w-full before:h-full before:border-2 before:border-light-white before:z-[-1]"
            >
              <img
                className="z-10"
                alt="skills"
                src="../assets/skills-image.png"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-10 gap-32 pl-10 pr-10">
        {/* FRONT-END */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                FRONT-END
              </p>
            </div>
            <div className="w-1/2 md:w-4/5 h-32 bg-blue opacity-80 absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex justify-center">
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/react-logo.png"
                alt="react-logo"
              />
            </div>
            <div className="p-3">
              <img className="pt-5" src="./assets/js-icon.png" alt="js-logo" />
            </div>
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/html-icon.png"
                alt="html-logo"
              />
            </div>
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/css-icon.png"
                alt="css-logo"
              />
            </div>
          </div>
        </motion.div>
        {/* BACK-END */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                BACK-END
              </p>
            </div>
            <div className="w-1/2 md:w-4/5 h-32 bg-rose-600 opacity-80 absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex justify-center">
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/node-icon.png"
                alt="react-logo"
              />
            </div>
            <div className="p-3 w-40 pt-6">
              <img
                className="pt-5"
                src="./assets/express-icon.png"
                alt="js-logo"
              />
            </div>
            <div className="p-3 w-20">
              <img
                className="pt-5"
                src="./assets/postman-icon.png"
                alt="html-logo"
              />
            </div>
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/postgresql-icon.png"
                alt="css-logo"
              />
            </div>
          </div>
        </motion.div>
        {/* TOOLS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">TOOLS</p>
            </div>
            <div className="w-1/2 md:w-4/5 h-32 bg-yellow opacity-80 absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex justify-center">
            <div className="pr-3 pt-2">
              <img src="./assets/git.png" alt="git-icon" />
            </div>
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/docker-icon.png"
                alt="docker-logo"
              />
            </div>
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/vscode-icon.png"
                alt="vscode-logo"
              />
            </div>
            <div className="p-3">
              <img
                className="pt-5"
                src="./assets/github.png"
                alt="github-logo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
