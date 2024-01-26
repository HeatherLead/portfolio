import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" flex justify-between p-14 bg-gray-800">
      <h1 className=" text-white font-bold  text-xl">copyright©{year}</h1>
      <div className=" flex  text-white">
        <a href="https://github.com/HeatherLead">
          <GitHubIcon
            fontSize="large"
            className="hover:text-blue-600 mr-1 sm:mr-4"
          />
        </a>
        <a href="">
          <LinkedInIcon
            fontSize="large"
            className=" hidden sm:block hover:text-blue-500"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
