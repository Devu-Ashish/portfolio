import React from "react";
import expenses from "../Assets/expenses.png";
import pigGame from "../Assets/pigGame.jpeg";
import djangoShop from "../Assets/djangoShop.jpeg";
import trueValue from "../Assets/trueValue.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: expenses,
      project: "ExpenseTracker",
    },
    {
      id: 2,
      src: trueValue,
      project: "Automobile Trading Website",
    },
    {
      id: 3,
      src: pigGame,
      project: "Simple number game",
    },
    {
      id: 4,
      src: djangoShop,
      project: "E - Commerce Website",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 px-12 justify-center gap-8 sm:px-0">
          {portfolios.map(({ id, src, project }) => (
            <div key={id} className="bg-gradient-to-b from-slate-700 to-slate-500 shadow-md shadow-black-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-80 h-40 mx-auto"
              />
              <p className="py-2 text-center">{project}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;