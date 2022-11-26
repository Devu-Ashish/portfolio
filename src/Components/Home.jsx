import React from "react";
import HeroImage from "../Assets/heroImage.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div  
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-500 "
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Front-end developer
            </h2>
            <p className="text-slate-300 py-4 max-w-md">
              Close to 2 years of professional experience in developing responsive front-end for the React apps
              and good knowledge in Javascript, Python and Django. In addition to that 
              proficient in producing clear and effective code.
            </p>

            <div>
              <Link
                to="Portfolio"
                smooth
                duration={500}
                className="group text-white w-fit flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 overflow-hidden px-5 py-2.5 cursor-pointer"
              >
                Portfolio
                {/* <span className="absolute w-64 h-64 mt-12 flex group-hover:-rotate-45 group-hover:-mt-24 transition-all duration-700 ease-out bg-purple-500 left-0 top-0"></span> */}
                {/* <span className="relative">Portfolio</span> */}
                <span className="group-hover:rotate-90 duration-700">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="py-4">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 h-md:w-full"
            />
          </div>
        </div>
      </div>
  );
};

export default Home;