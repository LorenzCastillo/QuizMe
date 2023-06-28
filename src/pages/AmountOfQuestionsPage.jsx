// Local Imports
import AmountChoice from "../components/AmountChoice";
import Navbar from "../components/Navbar";
// 3rd Party Imports
import { useState } from "react";

const AmountOfQuestionsPage = () => {

	const [animateState, setAnimateState] = useState("");

	const handleToggleAnimation = () => {
		setAnimateState("animate-pageTurnOut");
	};

	return (
		<>
			<Navbar/>
			<div className={`flex flex-col w-full my-10 items-center animate-pageTurnIn ${animateState}`}>
				<h1 className="font-alte-bold text-4xl text-center">
					<span className="text-white">Choose the</span>
					<span className="text-custom-red"> amount </span>
					<span className="text-white">of</span>
				</h1>
				<h1 className="font-alte-bold text-4xl text-center">
					<span className="text-white">questions for your quiz</span>
				</h1>

				<div className="flex flex-col mt-8 gap-8">
					<AmountChoice choice={10} handleToggleAnimation={handleToggleAnimation} animateState={animateState} />
					<AmountChoice choice={15} handleToggleAnimation={handleToggleAnimation} animateState={animateState} />
					<AmountChoice choice={20} handleToggleAnimation={handleToggleAnimation} animateState={animateState} />
				</div>
			</div>
		</>
	);
};

export default AmountOfQuestionsPage;