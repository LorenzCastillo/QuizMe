// Local Imports
import "./App.css";
import QuizContext from "./context/QuizContext";
import AmountOfQuestionsPage from "./pages/AmountOfQuestionsPage";
import HomePage from "./pages/HomePage";
import DifficultyPage from "./pages/DifficultyPage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import { useState } from "react";

const App = () => {

	const [quizLink, setQuizLink] = useState("");

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
			<QuizContext.Provider value={{ quizLink, setQuizLink }}>
				<QuizPage />
			</QuizContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/results",
			element:
			<QuizContext.Provider value={{ quizLink, setQuizLink }}>
				<ResultsPage />
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;