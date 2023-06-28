/* eslint-disable react/prop-types */
// Local imports
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizOption = (props) => {

	const { quiz, questionsAnswered, setQuestionsAnswered, correctAnswers, setCorrectAnswers, setIsCorrect, setIsIncorrect, revealAnswer, setRevealAnswer, isDisabled, setIsDisabled } = useContext(QuizContext);
	const navigate = useNavigate();
	const currentLocation = useLocation();
	const [params] = useState(currentLocation.pathname.split("/"));
	const [backgroundColor, setBackgroundColor] = useState("bg-custom-red");


	useEffect(() => {
		if (revealAnswer && quiz[questionsAnswered].answer == props.choice) {
			setBackgroundColor("bg-custom-yellow");

			setTimeout(() => {
				setBackgroundColor("bg-custom-red");
			}, "1500");
		}
	}, [revealAnswer]);

	const handleQuizInput = () => {
		setIsDisabled(true);

		if (quiz[questionsAnswered].answer == props.choice) {
			setIsCorrect(true);
			// UI
			setCorrectAnswers(correctAnswers + 1);
			setBackgroundColor("bg-custom-green");
		} else {
			setIsIncorrect(true);
			// UI
			setRevealAnswer(true);
		}

		setTimeout(() => {
			setIsCorrect(false);
			setIsIncorrect(false);
			// UI
			setQuestionsAnswered(questionsAnswered + 1);
			setBackgroundColor("bg-custom-red");
			setRevealAnswer(false);
			setIsDisabled(false);

			if (questionsAnswered + 1 >= params[2]) {
				navigate(`${currentLocation.pathname.replace("/quiz", "")}/results`);
			}
		}, "1500");
	};

	return (
		<>
			<button onClick={handleQuizInput} disabled={isDisabled}>
				<div className={`flex w-96 h-20 ${backgroundColor} text-white rounded-lg items-center text-left px-12`}>
					<h1 className="font-alte-bold text-2xl">{props.choice}</h1>
				</div>
			</button>
		</>
	);
};

export default QuizOption;