// Local Imports
import "./App.css";
import QuizContext from "../context/QuizContext";
import DifficultyPage from "./pages/DifficultyPage";
import HomePage from "./pages/HomePage";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import { useState } from "react";
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
			path: "/:category/difficulty",
			element:
			<QuizContext.Provider value={{ quizData, setQuizData }}>
				<DifficultyPage/>
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;