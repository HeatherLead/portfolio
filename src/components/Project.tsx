"use client";
import React, { useState } from "react";
import apple from "../images/apple.png";
import cLogo from "../images/ChatLogo.png";
import wLogo from "../images/Wlogo.png";
import headset from "../images/headset.png";
import chat from "../images/chat.png";
import weather from "../images/weather.png";

const Project = () => {
  const [app, setApp] = useState(true);
  const [cha, setCha] = useState(false);
  const [wea, setWea] = useState(false);

  return (
    <div className="overflow-x-hidden grid md:grid-cols-8 md:grid-rows-3 grid-rows-3 grid-cols-3 gap-5 justify-items-center content-center p-5 mt-20 mb-20 h-[70vh] sm:h-[80vh] md:[60vh] lg:h-[80vh]">
      <div className="md:col-span-7 md:row-span-3 col-span-3 row-span-2 rounded-lg border-2  overflow-hidden">
        {app && <img className="pImg" src={headset.src} alt="" />}
        {cha && <img className="pImg" src={chat.src} alt="" />}
        {wea && <img className="pImg" src={weather.src} alt="" />}
      </div>
      <div className="col-span-1 row-span-1">
        <img
          className="rounded-lg border-2 shadow-lg cursor-pointer"
          src={apple.src}
          alt=""
          onClick={() => {
            setApp(true);
            setCha(false);
            setWea(false);
          }}
        />
      </div>
      <div className="col-span-1 row-span-1">
        <img
          className="rounded-lg border-2 shadow-lg cursor-pointer"
          src={cLogo.src}
          alt=""
          onClick={() => {
            setApp(false);
            setCha(true);
            setWea(false);
          }}
        />
      </div>
      <div className="col-span-1 row-span-1">
        <img
          className="rounded-lg border-2 shadow-lg cursor-pointer"
          src={wLogo.src}
          alt=""
          onClick={() => {
            setApp(false);
            setCha(false);
            setWea(true);
          }}
        />
      </div>
    </div>
  );
};

export default Project;
