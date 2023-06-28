/* eslint-disable react-hooks/exhaustive-deps */
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
		// If revealAnswer is toggled and if this is the corresponding component with the correct answer,
		// change the background to yellow, then after 2s, turn it back to red
		if (revealAnswer && quiz[questionsAnswered].answer == props.choice) {
			setBackgroundColor("bg-custom-yellow");

			setTimeout(() => {
				setBackgroundColor("bg-custom-red");
			}, "1200");
		}
	}, [revealAnswer]);

	const handleQuizInput = () => {
		setIsDisabled(true);

		if (quiz[questionsAnswered].answer == props.choice) {
			// If it was answered correctly, turn background green
			setIsCorrect(true);
			setCorrectAnswers(correctAnswers + 1);
			setBackgroundColor("bg-custom-green");
		} else {
			// Otherwise, reveal the correct answer
			setIsIncorrect(true);
			setRevealAnswer(true);
		}
		// After 1.5s, toggle a fade in + out animation
		// After 0.5s (which is when the opacity is fully 0) switch the question
		// and reset all the values back
		setTimeout(() => {
			// Toggle Fade Animation
			props.handleAnimateState();
			setTimeout(() => {
				setIsCorrect(false);
				setIsIncorrect(false);
				setQuestionsAnswered(questionsAnswered + 1);
				setBackgroundColor("bg-custom-red");
				setRevealAnswer(false);
				setIsDisabled(false);

				// If the amount of questions answered is higher than the inputted amount of questions wanted
				// Change screen to the results page
				if (questionsAnswered + 1 >= params[2]) {
					navigate(`${currentLocation.pathname.replace("/quiz", "")}/results`);
				}
			}, "500");
		}, "700");
	};

	return (
		<>
			<button onClick={handleQuizInput} disabled={isDisabled}>
				<div className={`flex w-[26rem] h-20 ${backgroundColor} text-white rounded-lg items-center text-left px-12`}>
					<h1 className="font-alte-bold text-2xl">{props.choice}</h1>
				</div>
			</button>
		</>
	);
};

export default QuizOption;