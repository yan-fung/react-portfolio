/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="bg-darker-pink z-40 w-full fixed top-0 py-5">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100">
          YAN FUNG
        </h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-xl font-semibold">
            <AnchorLink onClick={() => setSelectedPage("home")} href="#home">
              <div className=" hover:text-white opacity-80 transition duration-500">
                Home
              </div>
            </AnchorLink>
            <AnchorLink
              onClick={() => setSelectedPage("skills")}
              href="#skills"
            >
              <div className=" hover:text-white opacity-80 transition duration-500">
                Skills
              </div>
            </AnchorLink>
            <AnchorLink
              onClick={() => setSelectedPage("projects")}
              href="#projects"
            >
              <div className=" hover:text-white opacity-80 transition duration-500">
                Projects
              </div>
            </AnchorLink>
            <AnchorLink
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              <div className=" hover:text-white opacity-80 transition duration-500">
                Contact
              </div>
            </AnchorLink>
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            type="button"
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-white opacity-80 w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button
                type="button"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-brown text-xl font-semibold">
              <AnchorLink onClick={() => setSelectedPage("home")} href="#home">
                <div className="  hover:text-black opacity-80 transition duration-500">
                  Home
                </div>
              </AnchorLink>
              <AnchorLink
                onClick={() => setSelectedPage("skills")}
                href="#skills"
              >
                <div className="  hover:text-black opacity-80 transition duration-500">
                  Skills
                </div>
              </AnchorLink>
              <AnchorLink
                onClick={() => setSelectedPage("projects")}
                href="#projects"
              >
                <div className=" hover:text-black opacity-80 transition duration-500">
                  Projects
                </div>
              </AnchorLink>
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                <div className=" hover:text-black opacity-80 transition duration-500">
                  Contact
                </div>
              </AnchorLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
