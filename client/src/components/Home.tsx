import { useState, useContext, useEffect } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const Home = () => {

  useEffect(() => {
    document.body.classList.add('h-full');
    document.body.classList.add('m-0');
    document.body.classList.add('p-0');
    
  });

  return (
    <div>
      <div className="absolute w-full h-full inset-0 bg-[url('https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg')] opacity-60 bg-no-repeat bg-cover bg-center -z-20"/>
      <div className="inset-0 container flex h-full z-10 opacity-100 items-center justify-center mt-16">
        <div className="flex-col absolute text-center justify-center mt-96 text-white bg-black bg-opacity-40 shadow-[0_0_20px_30px_rgba(0,0,0,0.4)]">
          <h1 className="text-6xl">Hermitrade</h1>
          <h4 className="mt-8">Technology owes ecology an apology</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
