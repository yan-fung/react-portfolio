import React from "react";
import linkedinPic from "../assets/linkedin.png";
import gitHubPic from "../assets/github-icon.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7 md:pl-12">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/yan-fung-4082401a4/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinPic} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/yan-fung"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={gitHubPic} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
