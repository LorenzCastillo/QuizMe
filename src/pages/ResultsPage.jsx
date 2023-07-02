// Local Imports
import Navbar from "../components/Navbar";
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
	const { correctAnswers, resetValues } = useContext(QuizContext);
	const [animateState, setAnimateState] = useState("");
	const currentLocation = useLocation().pathname.split("/");
	const navigate = useNavigate();

	useEffect(() => {
		document.title = "Results - QuizMe";
	}, []);

	const handleButtonClick = () => {
		setAnimateState("animate-fadeOut");
		setTimeout(() => {
			navigate("/");
			resetValues();
		}, "500");
	};

	return (
		<>
			<Navbar/>
			<div className={`flex flex-col w-full my-10 items-center animate-fadeIn ${animateState}`}>
				<h1 className="font-alte-bold text-4xl text-white">Results</h1>
				<div className="w-40 h-1.5 bg-custom-red mt-2"/>

				<h1 className="text-white text-4xl font-alte-bold mt-14">Correct Answers</h1>
				<p className="text-white text-3xl font-alte-bold mt-2">{correctAnswers}/{currentLocation[2]}</p>

				<div className="mt-32">
					<button onClick={handleButtonClick}>
						<div className="flex w-60 h-14 bg-custom-red hover:bg-custom-red-hover rounded-lg items-center justify-center shadow-custom-red">
							<p className="text-white text-2xl font-alte-bold">Home</p>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default ResultsPage;