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
			<div className="w-full h-full home-bg text-center text-white">
				<div className="opacity-100 items-center justify-center sm:py-6 md:py-12 py-3">
					<div className="m-60">
						<h1 className="text-6xl">Hermitrade</h1>
						<h4 className="mt-8">For <strong>all</strong> your electronic needs.</h4>
					</div>
				</div>
				<div className="opacity-100 items-center justify-center sm:py-6 md:py-12 py-3">
					<h1 className="text-4xl">
						Buy & Sell Used Electronics
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;
