import Navbar from "@/components/Navbar";
import main from "../images/main.png";
import template from "../images/template.png";
import rotate from "../images/rotateImg.gif";
import headset from "../images/headset.png";
import chat from "../images/chat.png";
import weather from "../images/weather.png";
import Stack from "./Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Footer from "./Footer";
import CTemp from "./CTemp";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Navbar />

      <div className="head flex justify-evenly flex-row items-center  mt-20  md:pt-20 pb-20 flex-wrap-reverse">
        <div className="p-4">
          <h1 className=" text-center lg:text-6xl mt-10 text-4xl font-bold  -skew-x-6">
            Full Stack Developer
          </h1>
          <p className=" pt-10 w-full sm:max-w-[600px] box-content">
            My name is Ayush Bangar, and I am a Full Stack Developer based in
            Mumbai, India 📍. I am very passionate about my work and strive to
            deliver quality results.
          </p>
        </div>

        <img
          src={main.src}
          className="main rounded-full  w-[300px] lg:w-[400px]"
          alt=""
        />
      </div>
      <Stack />

      <div className=" flex sm:pt-20 flex-row flex-wrap justify-evenly items-center">
        <div className=" relative">
          <img
            src={template.src}
            className=" max-w-[300px] sm:max-w-[450px] w-fit  rounded-2xl  aspect-auto"
            alt=""
          />
          <span>
            <img
              src={rotate.src}
              className=" absolute rounded-full hidden sm:block  max-w-32 right-[-32px] bottom-[-32px]"
              alt=""
            />
          </span>
        </div>
        <div className="about flex shadow-lg rounded-md p-2  items-stretch flex-col p-4">
          <h1 className="  text-3xl text-blue-600 font-bold">About Me</h1>
          <h2 className="para text-lg pt-2 max-w-[500px]">
            I am Junior Full Stack Developer with a Wide Range of Skills, I am
            well-equipped to tackle a variety of development projects. My
            strength lies in designing and maintaining responsive websites that
            deliver a seamless user experience. I specialize in writing clean
            and optimized code, utilizing the latest development tools and
            techniques to create dynamic and engaging interfaces. Additionally,
            I enjoy working with cross-functional teams, and I thrive in a
            collaborative environment where I can contribute to creating
            top-notch web applications..
          </h2>
        </div>
      </div>

      <div>
        <h1 className=" text-5xl font-bold pt-32 text-center ">
          {" "}
          Recent Projects
        </h1>
        <Project />
      </div>
      <CTemp />
      <Footer />
    </main>
  );
}
