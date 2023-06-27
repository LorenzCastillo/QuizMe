// Local Imports
import Navbar from "../components/Navbar";
import QuizOption from "../components/QuizOption";
import LinkContext from "../context/LinkContext";
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext, useEffect, useState } from "react";
import axios from "axios";


const QuizPage = () => {

	const [data, setData] = useState({});
	const [quiz, setQuiz] = useState([]);
	const [fetchedData, setFetchedData] = useState(false);
	const [questionsRandomized, setQuestionsRandomized] = useState(false);
	const [count, setCount] = useState(0);

	const { quizLink } = useContext(LinkContext);
	const quizType = quizLink.split("/");

	useEffect(() => {
		fetchData();
	});

	useEffect(() => {
		if (fetchedData) {
			addAnswers();
		}
	}, [fetchedData]);

	useEffect(() => {
		if (questionsRandomized) {
			console.log("QUIZ", quiz);
		}
	}, [questionsRandomized]);

	const fetchData = async () => {
		axios.get(`https://opentdb.com/api.php?amount=${quizType[1]}&category=${quizType[0]}&difficulty=${quizType[2]}&type=multiple`)
			.then(response => {
				setData(response.data);
				setFetchedData(true);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const randomizeAnswers = (item) => {
		// Fisher–Yates shuffle algorithm
		// https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
		let processedRandomizedAnswers = [];

		for (let i = 0; i < item.length; i++) {
			let answers = item[i];
			let x = answers.length - 1;

			while (--x > 0) {
				let temp = Math.floor(Math.random() * (x + 1));
				[answers[temp], answers[x]] = [answers[x], answers[temp]];
			}

			const randomizedAnswers = {
				answer1: answers[0],
				answer2: answers[1],
				answer3: answers[2],
				answer4: answers[3],
				question: answers[4]
			};

			console.log("TEST", randomizedAnswers);
			processedRandomizedAnswers.push(randomizedAnswers);
		}

		return processedRandomizedAnswers;
	};

	const addAnswers = async () => {
		const questions = await data.results;
		const processedQuestions = await questions.map((item) => {
			return [
				item.correct_answer,
				item.incorrect_answers[0],
				item.incorrect_answers[1],
				item.incorrect_answers[2],
				item.question
			];
		});

		const processedQuiz = await randomizeAnswers(processedQuestions);

		setQuiz(processedQuiz);
		setQuestionsRandomized(true);
	};

	return !questionsRandomized ? (
		<>

			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<div className="w-[28rem] h-32">
					<h1 className="font-alte-bold text-4xl text-white text-center">Loading...</h1>
				</div>
			</div>
		</>
	) : (
		<>
			<QuizContext.Provider value={{ quiz, count, setCount }}>
				<Navbar/>
				<div className="flex flex-col w-full my-10 items-center">
					<div className="w-[28rem] h-32">
						<h1 className="font-alte-bold text-2xl text-white text-center">#{count + 1}: {quiz[0].question}</h1>
					</div>

					<div className="grid md:grid-cols-2 grid-cols-1">
						<QuizOption choice={quiz[0].answer1}/>
						<QuizOption choice={quiz[0].answer2}/>
						<QuizOption choice={quiz[0].answer3}/>
						<QuizOption choice={quiz[0].answer4}/>
					</div>
				</div>
			</QuizContext.Provider>
		</>
	);
};

export default QuizPage;