// Local Imports
import Navbar from "../components/Navbar";
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext } from "react";
import { Link } from "react-router-dom";

const ResultsPage = () => {

	const { quizLink, correctAnswers, resetValues } = useContext(QuizContext);
	const quizType = quizLink.split("/");

	return (
		<>
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<h1 className="font-alte-bold text-4xl text-white">Results</h1>
				<div className="w-40 h-1.5 bg-custom-red mt-2"/>

				<h1 className="text-white text-4xl font-alte-bold mt-14">Correct Answer</h1>
				<p className="text-white text-3xl font-alte-bold mt-2">{correctAnswers}/{quizType[1]}</p>

				<div className="mt-32">
					<Link to={"/"}>
						<button onClick={resetValues}>
							<div className="flex w-60 h-14 bg-custom-red rounded-lg items-center justify-center">
								<p className="text-white text-2xl font-alte-bold">Home</p>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ResultsPage;