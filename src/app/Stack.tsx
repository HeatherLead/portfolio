import React from "react";
import machine from "../images/machine.gif";
import html from "../images/html.svg";
import css from "../images/css.svg";
import javascript from "../images/javascript.svg";
import typescript from "../images/typescript.svg";
import react from "../images/react.svg";
import next from "../images/nextjs.svg";
import tailwind from "../images/tailwind.svg";
import node from "../images/Nodejs.svg";
import express from "../images/express.svg";
import sql from "../images/postgreSQL.svg";
import prisma from "../images/prisma.svg";
import tech from "../images/tech.png";

const Stack = () => {
  return (
    <div>
      <div className="grid md:mt-36 grid-cols-6 justify-items-center content-center grid-rows-3  w-[330px] sm:w-[80%] md:w-[70%] lg:w-[50%] relative left-1/2 translate-x-[-50%]  gap-2">
        <div className="box col-span-2 justify-items-center items-center self-center  row-span-1  p-5 text-2xl font-bold border-2 rounded-lg shadow-xl  ">
          Tech Stack
        </div>

        <div className="box col-span-4 self-center row-span-1 grid grid-cols-3 grid-rows-1 justify-items-center items-center  p-5  border-2 rounded-lg shadow-xl">
          <img
            src={react.src}
            className="dice  self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12 m-2 "
            alt=""
          />
          <img
            src={next.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12 m-2 "
            alt=""
          />
          <img
            src={tailwind.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12 m-2 "
            alt=""
          />
        </div>
        <div className="box self-center col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 justify-items-center items-center  p-5 border-2 rounded-lg shadow-xl ">
          <img
            src={html.src}
            className="dice self-center w-10 h-10 sm:h-12   shadow-md hover:shadow-xl sm:w-12  m-2"
            alt=""
          />
          <img
            src={css.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12 m-2 "
            alt=""
          />
          <img
            src={javascript.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12  m-2"
            alt=""
          />
          <img
            src={typescript.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12  m-2"
            alt=""
          />
        </div>
        <div className="box self-center col-span-2 row-span-2 grid grid-cols-2 grid-rows-1 justify-items-center items-center  p-5 border-2 rounded-lg shadow-xl ">
          <img
            src={node.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12 m-2 "
            alt=""
          />
          <img
            src={express.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12  m-2"
            alt=""
          />
        </div>
        <div className="box self-center col-span-2 row-span-2 grid grid-cols-2 grid-rows-1 justify-items-center items-center  p-5 border-2 rounded-lg shadow-xl ">
          <img
            src={sql.src}
            className="dice self-center w-10 h-10 sm:h-12  shadow-md hover:shadow-xl sm:w-12  m-2"
            alt=""
          />
          <img
            src={prisma.src}
            className="dice self-center w-10 h-10 sm:h-12 shadow-md hover:shadow-xl sm:w-12 m-2 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Stack;
