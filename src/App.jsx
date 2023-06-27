// Local Imports
import "./App.css";
import AmountOfQuestionsPage from "./pages/AmountOfQuestionsPage";
import HomePage from "./pages/HomePage";
import DifficultyPage from "./pages/DifficultyPage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import QuizContext from "./context/QuizContext";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import { useState } from "react";

const App = () => {

	const [quizLink, setQuizLink] = useState("");
	const [questionsAnswered, setQuestionsAnswered] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [quiz, setQuiz] = useState([]);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isIncorrect, setIsIncorrect] = useState(false);
	const [revealAnswer, setRevealAnswer] = useState(false);

	const resetValues = () => {
		setQuestionsAnswered(0);
		setCorrectAnswers(0);
		setQuiz([]);
		setQuizLink("");
	};

	const route = useRoutes([
		{
			path: "/",
			element:
			<QuizContext.Provider value={{
				setQuizLink,
				resetValues
			}}>
				<HomePage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/amount",
			element:
			<QuizContext.Provider value={{
				quizLink,
				setQuizLink,
				resetValues
			}}>
				<AmountOfQuestionsPage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/difficulty",
			element:
			<QuizContext.Provider value={{
				quizLink,
				setQuizLink,
				resetValues
			}}>
				<DifficultyPage />
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/quiz",
			element:
			<QuizContext.Provider value={{
				quizLink,
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
				resetValues
			}}>
				<QuizPage />
			</QuizContext.Provider>
		},
		{
			path: "/results",
			element:
			<QuizContext.Provider value={{
				quizLink,
				correctAnswers,
				resetValues
			}}>
				<ResultsPage />
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;