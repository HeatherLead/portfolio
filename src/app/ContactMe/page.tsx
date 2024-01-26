import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <div className="cPage w-[100vw] h-[100vh]">
      <Navbar />
      <div className="  flex justify-evenly flex-wrap w-[100vw] h-[90vh]">
        <div
          className=" hidden lg:block"
          dangerouslySetInnerHTML={{
            __html: `

          <dotlottie-player src="https://lottie.host/f756f8b6-f328-474b-9717-9852f3f60ad6/VSHBOWH27p.json" background="transparent" speed="1" style="height:80vh; " loop autoplay></dotlottie-player>
          
        `,
          }}
        ></div>
        <Contact />
      </div>
    </div>
  );
};

export default page;
