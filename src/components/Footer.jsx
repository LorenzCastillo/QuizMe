import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="flex w-screen h-20 bg-custom-grey mt-10 items-center justify-center font-alte-rg gap-1">
				<span className="text-white">Developed by</span>
				<Link to={"https://github.com/LorenzCastillo/QuizMe"} target="_blank">
					<span className="text-custom-red">Lorenz Castillo</span>
				</Link>
			</div>
		</>
	);
};

export default Footer;