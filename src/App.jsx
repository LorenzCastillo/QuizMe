// Local Imports
import "./App.css";
import AmountOfQuestionsPage from "./pages/AmountOfQuestionsPage";
import HomePage from "./pages/HomePage";
import DifficultyPage from "./pages/DifficultyPage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import QuizContext from "./context/QuizContext";
import Response from "./pages/Response";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import { useState } from "react";

const App = () => {

	const [questionsAnswered, setQuestionsAnswered] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [quiz, setQuiz] = useState([]);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isIncorrect, setIsIncorrect] = useState(false);
	const [revealAnswer, setRevealAnswer] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	const resetValues = () => {
		setQuestionsAnswered(0);
		setCorrectAnswers(0);
		setQuiz([]);
	};

	const route = useRoutes([
		{
			path: "/",
			element:
			<QuizContext.Provider value={{
				resetValues
			}}>
				<HomePage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/amount",
			element:
			<QuizContext.Provider value={{
				resetValues
			}}>
				<AmountOfQuestionsPage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/difficulty",
			element:
			<QuizContext.Provider value={{
				resetValues
			}}>
				<DifficultyPage />
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/quiz",
			element:
			<QuizContext.Provider value={{
				quiz,
				setQuiz,
				questionsAnswered,
				setQuestionsAnswered,
				correctAnswers,
				setCorrectAnswers,
				isCorrect,
				setIsCorrect,
				isIncorrect,
				setIsIncorrect,
				revealAnswer,
				setRevealAnswer,
				resetValues,
				isDisabled,
				setIsDisabled
			}}>
				<QuizPage />
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/results",
			element:
			<QuizContext.Provider value={{
				correctAnswers,
				resetValues
			}}>
				<ResultsPage />
			</QuizContext.Provider>
		},
		{
			path: "/api",
			element:
			<QuizContext.Provider value={{}}>
				<Response />
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;