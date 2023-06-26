import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuizOption from "../components/QuizOption";
import QuizContext from "../context/QuizContext";

const QuizPage = () => {

	const { quizLink } = useContext(QuizContext);
	const [quizData, setQuizData] = useState({});
	const quizType = quizLink.split("/");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(`https://opentdb.com/api.php?amount=${quizType[1]}&category=${quizType[0]}&difficulty=${quizType[2]}&type=multiple`);
			const responseData = await response.json();
			setQuizData(responseData);
			setLoading(false);
			console.log(responseData);
		} catch (error) {
			console.log(error);
		}
	};

	return loading ? (
		<>
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<div className="w-[28rem] h-32">
					<h1 className="font-alte-bold text-2xl text-white text-center">Loading...</h1>
				</div>
			</div>
		</>
	) : (
		<>
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<div className="w-[28rem] h-32">
					<h1 className="font-alte-bold text-2xl text-white text-center">#1: What is the first letter of the Greek alphabet</h1>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1">
					<QuizOption choice={"Epsilon"}/>
					<QuizOption choice={"Epsilon"}/>
					<QuizOption choice={"Epsilon"}/>
					<QuizOption choice={"Epsilon"}/>
				</div>
			</div>
		</>
	);
};

export default QuizPage;