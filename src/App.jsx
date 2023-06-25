// Local Imports
import "./App.css";
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
			path: "/home",
			element:
			<QuizContext.Provider value={{ quizData, setQuizData }}>
				<HomePage/>
			</QuizContext.Provider>
		}
	]);

	return route;
};

export default App;