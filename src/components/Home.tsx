import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HermitradeContext } from "../context/HermitradeContext";

const Home = () => {
  const backgroundImageData = useState({
    currentImage: 0,
    imageURLs: [
      "url(https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg)",
      "url(https://interconnection.org/wp-content/uploads/2019/05/scrapyard-2441432_1920.jpg)",
      "url(http://prod-upp-image-read.ft.com/afc73936-3287-11ea-a329-0bcf87a328f2)",
    ],
    timeSinceLastSwitch: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    document.getElementById("getting-started")?.scrollIntoView();
  };

  return (
    <div className="bg-[#444]">
      <div className="home-bg text-center text-white">
        <div className="opacity-100 items-center justify-center sm:py-6 md:py-12 py-3">
          <div className="m-40">
            <h1 className="text-7xl">Hermitrade</h1>
            <h4 className="mt-2 text-xl">
              For <strong>all</strong> your electronic needs.
            </h4>
            <button
              className="inset-y-0 bg-[#e29608] px-8 py-2 mt-6 rounded-full duration-300 hover:bg-[#bd7e0a]"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
        </div>
        <div id="getting-started" className="text-white pt-48 lg:px-80 md:px-40 sm:px-20">
          <div className="font-bold w-full text-justify pl-20 pr-20 pt-20 pb-5">
            Getting Started
          </div>
          <ul className="w-full text-justify pl-20 pr-20 pb-20">
            <li>
              1. Install MetaMask, a crypto wallet, from{" "}
              <a target="_blank" href="https://metamask.io/download">
                https://metamask.io/download
              </a>
              .
            </li>
            <li>2. Follow the instructions to create a new wallet.</li>
            <li>
              3. At the top right, open the networks and click “Show/hide test
              networks”.
            </li>
            <li>4. Enable “Show test networks”.</li>
            <li>5. Select the Goerli Test Network.</li>
            <li>
              6. Connect the wallet with our site by clicking the “Connect Wallet”
              button at the top right.
            </li>
            <li>
              7. Purchase items inside the Marketplace and post items for sale at
              Post Deals.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
