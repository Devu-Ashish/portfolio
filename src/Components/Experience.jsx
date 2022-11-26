import React from "react";
import wiproLogo from "../Assets/wiproLogo.jpg";
import ericssonLogo from "../Assets/ericssonLogo.jpg";
import sailsLogo from "../Assets/sailsLogo.png";
import unccLogo from "../Assets/unccLogo.jpg";

const Experience = () => {
  const portfolios = [
    {
      id: 1,
      src: wiproLogo,
      title: "Project Engineer",
    },
    {
      id: 2,
      src: ericssonLogo,
      title: "Project Intern",
    },
    {
      id: 3,
      src: sailsLogo,
      title: "Front-End Developer(React)",
    },
    {
      id: 4,
      src: unccLogo,
      title: "Graduate Teaching Assistant",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 px-12 justify-center gap-8 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="bg-gradient-to-b from-slate-700 to-slate-500 shadow-md shadow-black-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-80 h-40 mx-auto"
              />
              <p className="py-2 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;