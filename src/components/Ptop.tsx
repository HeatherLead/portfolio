"use client";
import React from "react";

const Ptop = () => {
  return (
    <div
      className=" relative  -z-20 "
      dangerouslySetInnerHTML={{
        __html: `
    <dotlottie-player src="https://lottie.host/595cd5b8-b1bc-4560-969a-48bf028fdad6/4rEwBE9Qdi.json" background="transparent" speed="1" style="width: 100vw;" loop autoplay></dotlottie-player>
   
 `,
      }}
    ></div>
  );
};

export default Ptop;
