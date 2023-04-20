import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-darker-pink pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <p className="text-md text-end">
          &copy;2022 YAN FUNG. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
