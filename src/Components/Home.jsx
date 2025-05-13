import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Footer } from "./Footer";
import home_page_image from '../assets/converted_image.png'

export const Home = () => {
  const iconsArray = [
    {
      icon: <FaHtml5 />,
      design: "text-red-400",
    },
    {
      icon: <SiCss3 />,
      design: "text-blue-700",
    },
    {
      icon: <IoLogoJavascript />,
      design: "text-yellow-400",
    },
    {
      icon: <IoLogoReact />,
      design: "text-blue-400",
    },
    {
      icon: <FaNode />,
      design: "text-green-600",
    },
    {
      icon: <SiMongodb />,
      design: "text-green-700",
    },
    {
      icon: <FaAngular />,
      design: "text-red-300",
    },
    {
      icon: <SiTypescript />,
      design: "text-blue-400",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* className='flex lg:flex-row md:flex-col justify-center gap-4 mt-[60px] w-[1650px] mx-auto  md:mx-auto  md:gap-5  ' */}

        {/* for name and info */}

        
        <div className="flex flex-col items-start mt-[110px] sm:mt-[58px] xl:mt-[150px] lg:mt-[120px] ">
          <h1 className="font-bold p-2 text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-serif ">
            Sarvajeet Singh
          </h1>

          <div>
            <p className=" text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 p-2 font-serif">
              A passionate individual who always thrives to work on end to end
              products which develop sustainable and scalable social and
              technical systems to create impact
            </p>

            {/* links-part */}

            <div className="mt-[30px]">
              <ul className="flex items-center gap-4">
                <li className="text-[50px]">
                  <a
                    className="text-gray-500"
                    href="https://github.com/sarvajeet-hue"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="text-[50px]">
                  <a
                    className="text-blue-500"
                    href="https://www.linkedin.com/in/sarvajeet-singh-a775a0244/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* for picture */}
        <div className="w-full">
          <img src={home_page_image} alt="" />
        </div>
      </div>

      {/* what i do  */}

      <div className="flex flex-col mt-[150px]">
        <h1
          className="font-bold text-lg text-center font-serif text-white
                xl:font-bold xl:text-4xl xl:text-center 
            "
        >
          What I Do ?
        </h1>

        <div className="flex flex-col sm:flex sm:flex-row xl:p-2 xl:gap-[60px]">
          {/* image-section */}
          <div>
            <img src={home_page_image} alt="" />
          </div>

          <div className="flex flex-col items-center gap-3 xl:mt-[117px] sm:mt-[75px] lg:mt-[116px] xl:flex xl:flex-col xl:gap-5">
            <h1 className="font-bold text-white text-lg sm:font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif">
              Full Stack Development
            </h1>

            <div className="flex items-center justify-center gap-3 flex-wrap p-3 xl:gap-20 xl:text-4xl font-bold lg:gap-10 ">
              {iconsArray.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-full p-2 bg-blue-100 flex items-center justify-center"
                  >
                    <div className={`${icon?.design}`}>{icon?.icon}</div>
                  </div>
                );
              })}
            </div>

            <div>
              <ul className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-500 p-2 gap-3 font-serif">
                <li>
                  Building responsive website front end using React-Redux and
                  Angular.{" "}
                </li>
                <li>
                  Creating application backend in Node, Using Express and
                  MongoDB for Database.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
