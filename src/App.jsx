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

	const route = useRoutes([
		{
			path: "/",
			element:
			<QuizContext.Provider value={{ quizLink, setQuizLink }}>
				<HomePage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/amount",
			element:
			<QuizContext.Provider value={{ quizLink, setQuizLink }}>
				<AmountOfQuestionsPage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/difficulty",
			element:
			<QuizContext.Provider value={{ quizLink, setQuizLink }}>
				<DifficultyPage />
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/quiz",
			element:
			<QuizContext.Provider value={{ quizLink, setQuizLink, quiz, setQuiz, questionsAnswered, setQuestionsAnswered, correctAnswers, setCorrectAnswers, isCorrect, setIsCorrect, isIncorrect, setIsIncorrect }}>
				<QuizPage />
			</QuizContext.Provider>
		},
		{
			path: "/results",
			element:
			<QuizContext.Provider value={{ quizLink, setQuizLink, quiz, setQuiz, questionsAnswered, setQuestionsAnswered, correctAnswers, setCorrectAnswers }}>
				<ResultsPage />
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;