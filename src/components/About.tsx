import { useState } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const About = () => {
  /*'url(https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg)'
	'url(https://interconnection.org/wp-content/uploads/2019/05/scrapyard-2441432_1920.jpg)'
	'url(https://www.ecomena.org/wp-content/uploads/2016/08/e-waste-recycling.jpg']*/

  return (
    <div className="p-10 about-bg">
      <div className="my-5">
        <div className="about-card">
          <div className="w-auto text-left justify-center pr-20 pl-20  pt-10 text-white font-bold">
            <h1 className="text-6xl">About</h1>
          </div>
          <div className="w-full h-full">
            <div className="w-full text-justify pr-20 pl-20 pb-20 pt-10 text-white">
              <div>
                Think about the last time one of your devices had to be
                replaced. How long were you able to use it until it eventually
                broke? If you said less than a couple of years, then your device
                is the same as millions of others that’s just going to make its
                way to the landfill where for nothing.
              </div>{" "}
              <br />
              <div>
                For years, the cost of producing devices was relatively
                expensive. That is, until recently, when microchips have become
                small and easy enough to manufacture that it’s cheaper to buy an
                entirely new device than to pay for repairs.
              </div>{" "}
              <br />
              <div>
                This has caused a massive problem of an abundance of electronic
                waste (e-waste). Around 50 million tons of e-waste is produced
                every year, a number that will only grow unless action is taken.
                This waste almost always has toxic materials still in it that
                poisons the soil and water that the landfills are built on.
              </div>{" "}
              <br />
              <div>
                But what can you, an everyday citizen, do to help? This is where
                Hermitrade comes in. You may not be able to lobby the government
                or change the minds of CEOs, but you do have autonomy over your
                purchasing decisions. Every time you use Hermitrade instead of
                buying a new device, a bit less waste gets added to the
                landfills. With every new user, companies are less able to use
                the predatory tactic of excess.
              </div>{" "}
              <br />
              <div>
                Not only is it cheaper to buy second hand, but when you use
                Hermitrade, you're changing the world for the better.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
