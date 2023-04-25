import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from "./SocialMediaIcons";
import profilePic from "../assets/profile-pic.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-5 py-16"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-5 md:mt-22">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[400px] before:h-full before:border-8 before:border-white before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[450px]"
              alt="profile-pic"
              src={profilePic}
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            alt="profile"
            src="../assets/profile-pic.png"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32 md:mx-10">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="md:text-6xl text-4xl text-black font-playfair z-10 text-center md:text-start md:pl-12">
            Hello, I am{" "}
            <span
              className="xs:relative xs:text-black xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[120px] before:z-[-1]"
            >
              Yan
            </span>
          </p>

          <p className="mt-10 mb-7 md:text-lg text-sm text-center md:text-start pt-5 md:pl-12 xs:px-5">
            I am a developer who recently graduated from a software engineering
            bootcamp with{" "}
            <a
              className=""
              href="https://www.commandshift.co/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-deep-blue">Command Shift</span>
            </a>{" "}
            in March 2023 after switching from a career in the legal industry. I
            have a keen interest in science and technology and am excited to
            begin this new chapter in my career.
          </p>
          <div>
            <p className="md:text-lg text-sm text-center md:text-start md:pl-12 xs:px-5">
              I enjoy learning and building things as it brings me a lot of joy
              and satisfaction. Learning to code is fascinating as it challenges
              me to think creatively and tackle problems from different angles.
              Soft skills such as patience and perseverance are also very
              important and these are areas that I always want to keep improving
              for my personal and professional growth.
            </p>
          </div>
          <div className="pt-10">
            <p className="md:text-lg text-sm text-center md:text-start md:pl-12 xs:px-5">
              In my free time, I love to paint and create artwork. I also enjoy
              reading books and teaching myself to play the piano. (Just for fun
              :D)
            </p>
          </div>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-10 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-brown rounded-sm py-3 px-7 md:ml-12 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-dark-pink font-semibold hover:text-white transition duration-500 w-full h-full flex items-center justify-center px-10">
              Let&apos;s talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
