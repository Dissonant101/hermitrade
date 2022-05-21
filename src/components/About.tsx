import { useState } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const About = () => {
	return (
		<div className="w-full h-full about-bg">
			<div className="flex-col text-center justify-center p-80 text-white ">
				<h1 className="text-6xl">About</h1>
				<h4 className="mt-8">What is Hermitrade?</h4>
			</div>
		</div>
	);
};

export default About;
