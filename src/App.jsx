// Local Imports
import "./App.css";
import QuizContext from "../context/QuizContext";
import AmountOfQuestionsPage from "./pages/AmountOfQuestionsPage";
import HomePage from "./pages/HomePage";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import { useState } from "react";
import DifficultyPage from "./pages/DifficultyPage";
import QuizPage from "./pages/QuizPage";
const App = () => {

	const [quizData, setQuizData] = useState([]);

	const route = useRoutes([
		{
			path: "/",
			element:
			<QuizContext.Provider value={{ quizData, setQuizData }}>
				<HomePage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/questionsAmount",
			element:
			<QuizContext.Provider value={{ quizData, setQuizData }}>
				<AmountOfQuestionsPage/>
			</QuizContext.Provider>
		},
		{
			path: "/:category/:questions/difficulty",
			element:
			<QuizContext.Provider value={{ quizData, setQuizData }}>
				<DifficultyPage />
			</QuizContext.Provider>
		},
		{
			path: "/:category/:questions/:difficulty/quiz",
			element:
			<QuizContext.Provider value={{ quizData, setQuizData }}>
				<QuizPage />
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;