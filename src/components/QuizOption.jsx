// Local imports
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const QuizOption = (props) => {

	const { quizLink, quiz, questionsAnswered, setQuestionsAnswered, correctAnswers, setCorrectAnswers, setIsCorrect, setIsIncorrect } = useContext(QuizContext);
	const quizType = quizLink.split("/");
	const navigate = useNavigate();

	const [backgroundColor, setBackgroundColor] = useState("bg-custom-red");

	const handleQuizInput = () => {
		if (quiz[questionsAnswered].answer == props.choice) {
			setCorrectAnswers(correctAnswers + 1);
			setBackgroundColor("bg-custom-green");
			setIsCorrect(true);
		} else {
			setIsIncorrect(true);
		}

		setTimeout(() => {
			setQuestionsAnswered(questionsAnswered + 1);
			setBackgroundColor("bg-custom-red");
			setIsCorrect(false);
			setIsIncorrect(false);
		}, "1500");

		if (questionsAnswered >= quizType[1] - 1) {
			navigate("/results");
		}
	};

	return (
		<>
			<button onClick={handleQuizInput}>
				<div className={`flex w-96 h-20 ${backgroundColor} text-white rounded-lg items-center text-left px-12`}>
					<h1 className="font-alte-bold text-2xl">{props.choice}</h1>
				</div>
			</button>
		</>
	);
};

export default QuizOption;