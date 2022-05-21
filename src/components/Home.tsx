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
      <div className="w-full h-full home-bg">
        <div className="flex h-full opacity-100 items-center justify-center pt-16">
          <div className="flex-col text-center justify-center m-60 text-white">
            <h1 className="text-6xl">Hermitrade</h1>
            <h4 className="mt-8">For <strong>all</strong> your electronic needs.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
