// Local Imports
import Navbar from "../components/Navbar";
import QuizOption from "../components/QuizOption";
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import he from "he";

const QuizPage = () => {

	const { quizLink, quiz, setQuiz, questionsAnswered, isCorrect, isIncorrect } = useContext(QuizContext);
	const [data, setData] = useState({});
	const [fetchedData, setFetchedData] = useState(false);
	const [questionsRandomized, setQuestionsRandomized] = useState(false);

	const quizType = quizLink.split("/");

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (fetchedData) {
			addAnswers();
		}
	}, [fetchedData]);

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
			let x = answers.length - 2;

			while (--x > 0) {
				let temp = Math.floor(Math.random() * (x + 1));
				[answers[temp], answers[x]] = [answers[x], answers[temp]];
			}

			const randomizedAnswers = {
				answer1: answers[0],
				answer2: answers[1],
				answer3: answers[2],
				answer4: answers[3],
				question: answers[4],
				answer: answers[5]
			};

			processedRandomizedAnswers.push(randomizedAnswers);
		}

		return processedRandomizedAnswers;
	};

	const addAnswers = () => {
		const questions = data.results;
		const processedQuestions = questions.map((item) => {

			return [
				he.decode(item.correct_answer),
				he.decode(item.incorrect_answers[0]),
				he.decode(item.incorrect_answers[1]),
				he.decode(item.incorrect_answers[2]),
				he.decode(item.question),
				he.decode(item.correct_answer)
			];
		});

		const processedQuiz = randomizeAnswers(processedQuestions);

		setQuiz(processedQuiz);
		setQuestionsRandomized(true);
	};

	return (!questionsRandomized || questionsAnswered >= quizType[1]) ? (
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
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<div className="w-[62rem] h-32">
					<h1 className="font-alte-bold text-3xl text-white text-center">#{questionsAnswered + 1}: {quiz[questionsAnswered].question}</h1>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-6">
					<QuizOption choice={quiz[questionsAnswered].answer1}/>
					<QuizOption choice={quiz[questionsAnswered].answer2}/>
					<QuizOption choice={quiz[questionsAnswered].answer3}/>
					<QuizOption choice={quiz[questionsAnswered].answer4}/>
				</div>
				{isCorrect && (
					<h1 className={"font-alte-bold text-4xl text-white text-center mt-24"}>Correct!</h1>
				)}
				{isIncorrect && (
					<h1 className={"font-alte-bold text-4xl text-white text-center mt-24"}>Incorrect...</h1>
				)}
			</div>
		</>
	);
};

export default QuizPage;