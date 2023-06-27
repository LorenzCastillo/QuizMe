/* eslint-disable react/prop-types */
// Local Imports
import { Link } from "react-router-dom";
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext } from "react";

const AmountChoice = (props) => {
	const { quizLink, setQuizLink } = useContext(QuizContext);

	const handleQuizContext = () => {
		setQuizLink(`${quizLink}/${props.choice}`);
	};

	return (
		<>
			<Link to={`/${quizLink}/${props.choice}/difficulty`}>
				<button onClick={handleQuizContext}>
					<div className="flex w-96 h-20 bg-custom-red text-white rounded-xl items-center justify-center">
						<h1 className="font-alte-bold text-3xl">{props.choice}</h1>
					</div>
				</button>
			</Link>
		</>
	);
};

export default AmountChoice;