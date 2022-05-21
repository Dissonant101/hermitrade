import { useState } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const About = () => {
	const backgroundImageData = useState({
		currentImage: 0,
		imageURLs: ['url(https://i.unu.edu/media/ourworld.unu.edu-en/article/8602/e-waste.jpg)',
			'url(https://interconnection.org/wp-content/uploads/2019/05/scrapyard-2441432_1920.jpg)',
			'url(https://www.ecomena.org/wp-content/uploads/2016/08/e-waste-recycling.jpg'],
		timeSinceLastSwitch: 0,
	});

	return (
		<div>
			<div className="w-full h-full opacity-100 bg-[url('https://www.ecomena.org/wp-content/uploads/2016/08/e-waste-recycling.jpg')] bg-cover bg-no-repeat bg-center">
				<div className="w-auto flex-col text-center justify-center p-80 text-white bg-black bg-opacity-40">
					<h1 className="text-6xl">About</h1>
					<h3 className="mt-8">What is the goal of Hermitrade?</h3>
				</div>
			</div>
			<div>
				<div className="w-full text-justify p-20">
					Think about the last time one of your devices had to be replaced. How long were you able to use it until it eventually broke? If you said less than a couple of years, then your device is the same as millions of others that’s just going to make its way to the landfill where for nothing. <br /><br />

					For years, the cost of producing devices was relatively expensive. That is, until recently, when microchips have become small and easy enough to manufacture that it’s cheaper to buy an entirely new device than to pay for repairs. <br /><br />

					This has caused a massive problem of an abundance of electronic waste (e-waste). Around 50 million tons of e-waste is produced every year, a number that will only grow unless action is taken. This waste almost always has toxic materials still in it that poisons the soil and water that the landfills are built on. <br /><br />

					But what can you, an everyday citizen, do to help? This is where Hermitrade comes in. You may not be able to lobby the government or change the minds of CEOs, but you do have autonomy over your purchasing decisions. Every time you use Hermitrade instead of buying a new device, a bit less waste gets added to the landfills. With every new user, companies are less able to use the predatory tactic of excess. <br /><br />

					So join Hermitrade today to not only find the right device for you, but to also help make a difference.

				</div>
			</div>
		</div>
	);
};

export default About;
