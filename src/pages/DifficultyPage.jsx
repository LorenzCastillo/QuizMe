// Local Imports
import DifficultyChoice from "../components/DifficultyChoice";
import Navbar from "../components/Navbar";
// 3rd Party Imports
import { useState } from "react";

const DifficultyPage = () => {

	const [animateState, setAnimateState] = useState();

	const handleToggleAnimation = () => {
		setAnimateState("animate-pageTurnOut");
	};

	return (
		<>
			<Navbar/>
			<div className={`flex flex-col w-full my-10 items-center animate-pageTurnIn ${animateState}`}>
				<h1 className="font-alte-bold text-4xl ">
					<span className="text-white">Select your</span>
					<span className="text-custom-red"> Difficulty</span>
				</h1>

				<div className="flex flex-col mt-8 gap-8">
					<DifficultyChoice choice={"Easy"} value={"easy"} handleToggleAnimation={handleToggleAnimation} animateState={animateState} />
					<DifficultyChoice choice={"Medium"} value={"medium"} handleToggleAnimation={handleToggleAnimation} animateState={animateState} />
					<DifficultyChoice choice={"Hard"} value={"hard"} handleToggleAnimation={handleToggleAnimation} animateState={animateState} />
				</div>
			</div>
		</>
	);
};

export default DifficultyPage;