import React from "react";
import Navbar from "@/components/Navbar";
import first from "@/components/projectImages/1.jpg";
import sec from "@/components/projectImages/2.jpg";
import third from "@/components/projectImages/3.jpg";
import fouth from "@/components/projectImages/4.jpg";
import fifth from "@/components/projectImages/5.jpg";
import six from "@/components/projectImages/6.jpg";
import seven from "@/components/projectImages/7.jpg";
import eight from "@/components/projectImages/8.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Ptop from "@/components/Ptop";
const page = () => {
  return (
    <div className="pPage">
      <Navbar />
      <Ptop />

      <div className=" p-5  grid gap-10  gap justify-evenly  justify-items-center md:w-[95vw]  relative  left-1/2 -translate-x-1/2  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="im  w-80 md:w-96 ">
          <h1 className=" pt-10 text-5xl font-bold">MY WORK</h1>
          <p className="para sm:text-md  lg:text-lg text-gray-600">
            Crafting a stunning project takes a pinch of patience and a heap of
            dedication. I believe in putting my heart and soul into each
            creation, aiming for top-notch quality over quantity any day.
          </p>
        </div>

        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={sec.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%] opacity-0   backdrop-blur-sm text-white hover:h-[50%] hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">DrumKit</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/drum-kit"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://drum-kit-one-lovat.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={first.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%] opacity-0   backdrop-blur-sm text-white hover:h-[50%] hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">Chat App</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/chat"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://chat-sepia-two.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={third.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%]  hover:h-[50%]  opacity-0   backdrop-blur-sm text-white  hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">Apple Clone</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/apple"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://apple-plum-chi.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={fouth.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%] opacity-0   backdrop-blur-sm text-white hover:h-[50%] hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">To Do List</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/toDoList"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://to-do-list-nine-beryl.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={fifth.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%]  opacity-0 ] hover:h-[50%]   backdrop-blur-sm text-white  hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">Mind Game</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/Mind-Game"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://mind-game-ten.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={six.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%] opacity-0   backdrop-blur-sm text-white hover:h-[50%] hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">Flight</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/flight"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://flight-omega.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={seven.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%]   opacity-0  backdrop-blur-sm text-white  hover:h-[50%] hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">Thala Detector</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/thala"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://thala-self.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
        <div className="im relative">
          <img
            className=" w-80 md:w-96 rounded-xl shadow-lg "
            src={eight.src}
            alt=""
          />
          <div className="obj absolute p-5 bottom-0 left-0 w-full h-[40%]   opacity-0  backdrop-blur-sm text-white  hover:h-[50%] hover:opacity-100  cursor-pointer ">
            <h1 className=" text-2xl font-bold pb-2 ">Weather Map</h1>
            <a
              className=" border-b-2 rounded-sm pb-2 mr-5 text-xl"
              href="https://github.com/HeatherLead/weather"
            >
              Code <GitHubIcon />
            </a>
            <a
              className=" border-b-2 rounded-sm ml-5 pb-2 text-xl"
              href="https://weather-for-a-reason.vercel.app/"
            >
              Demo <OpenInNewIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
