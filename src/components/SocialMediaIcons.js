import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 md:pl-12">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/yan-fung-4082401a4/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/yan-fung"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/github-icon.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
