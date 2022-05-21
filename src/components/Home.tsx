import { useState, useContext, useEffect } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const Home = () => {

  const backgroundImageData = useState({
    currentImage: 0,
    imageURLs: ['url(https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg)',
      'url(https://interconnection.org/wp-content/uploads/2019/05/scrapyard-2441432_1920.jpg)',
      'url(http://prod-upp-image-read.ft.com/afc73936-3287-11ea-a329-0bcf87a328f2)'],
    timeSinceLastSwitch: 0,
  });

  useEffect(() => {
    document.body.classList.add('h-full');
    document.body.classList.add('m-0');
    document.body.classList.add('p-0');

  });

  return (
    <div>
      <div className="w-full h-full bg-[url('https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg')] opacity-60 bg-no-repeat bg-cover bg-center">
        <div className="flex h-full opacity-100 items-center justify-center pt-16">
          <div className="flex-col text-center justify-center m-60 text-white bg-black bg-opacity-40 shadow-[0_0_20px_40px_rgba(0,0,0,0.4)]">
            <h1 className="text-6xl">Hermitrade</h1>
            <h4 className="mt-8">Technology owes ecology an apology</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
