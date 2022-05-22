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
		document.body.classList.add("h-full");
		document.body.classList.add("m-0");
		document.body.classList.add("p-0");
	});

	return (
		<div>
			<div className="w-full h-full home-bg text-center text-white">
				<div className="opacity-100 items-center justify-center sm:py-6 md:py-12 py-3">
					<div className="m-60">
						<h1 className="text-6xl">Hermitrade</h1>
						<h4 className="mt-8">
							For <strong>all</strong> your electronic needs.
						</h4>
					</div>
				</div>
				<div className="opacity-100 items-center justify-center sm:py-6 md:py-12 py-3">
					<h1 className="text-4xl">Buy & Sell Used Electronics</h1>
				</div>
			</div>
			<div>
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
	);
};

export default Home;
