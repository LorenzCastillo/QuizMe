// Local Imports
import "./App.css";
import LinkContext from "./context/LinkContext";
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
			<LinkContext.Provider value={{ quizLink, setQuizLink }}>
				<HomePage/>
			</LinkContext.Provider>
		},
		{
			path: "/:category/amount",
			element:
			<LinkContext.Provider value={{ quizLink, setQuizLink }}>
				<AmountOfQuestionsPage/>
			</LinkContext.Provider>
		},
		{
			path: "/:category/:amount/difficulty",
			element:
			<LinkContext.Provider value={{ quizLink, setQuizLink }}>
				<DifficultyPage />
			</LinkContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/quiz",
			element:
			<LinkContext.Provider value={{ quizLink, setQuizLink }}>
				<QuizPage />
			</LinkContext.Provider>
		},
		{
			path: "/:category/:amount/:difficulty/results",
			element:
			<LinkContext.Provider value={{ quizLink, setQuizLink }}>
				<ResultsPage />
			</LinkContext.Provider>
		}
	]);

	return route;
};

export default App;