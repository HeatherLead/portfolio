"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const path = usePathname();

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="z-50 relative flex justify-evenly pt-2 pb-3 bg-white shadow-gray-500 shadow-md">
      <h1 className="text-2xl font-bold">AYUSH</h1>
      <span className="md:hidden">
        <MenuIcon onClick={handleDropdown} fontSize="large" />
      </span>
      <ul className={`navlink flex ${dropdown ? "open" : ""}`}>
        <Link
          className={
            path === "/"
              ? " text-3xl md:text-xl md:pl-4 md:pr-4  border-b-2"
              : " text-3xl md:text-xl md:pl-4 md:pr-4"
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            path === "/projects"
              ? " text-3xl md:text-xl md:pl-4 md:pr-4  border-b-2"
              : " text-3xl md:text-xl md:pl-4 md:pr-4"
          }
          href="./projects"
        >
          Project
        </Link>
        <Link
          className={
            path === "/ContactMe"
              ? " text-3xl md:text-xl md:pl-4 md:pr-4  border-b-2"
              : " text-3xl md:text-xl md:pl-4 md:pr-4"
          }
          href="./ContactMe"
        >
          Contact Me
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
