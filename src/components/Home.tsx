import { useState, useContext, useEffect } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const Home = () => {

  useEffect(() => {
    document.body.classList.add('h-full');
    document.body.classList.add('m-0');
    document.body.classList.add('p-0');
  });

  return (
    <div className="container flex h-full bg-[url('https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg')] opacity-60 bg-no-repeat bg-cover bg-center">
      <div className="w-full flex-col absolute text-center justify-center mt-72 text-white opacity-100">
        <h1 className="text-6xl">Hermitrade</h1>
        <h4 className="mt-8">Technology owes ecology an apology</h4>
      </div>
      
      
    </div>
  );
};

export default Home;
