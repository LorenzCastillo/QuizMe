import Navbar from "../components/Navbar";
import QuizChoice from "../components/QuizChoice";

const QuizPage = () => {
	return (
		<>
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<div className="w-[28rem] h-32">
					<h1 className="font-alte-bold text-2xl text-white text-center">#1: What is the first letter of the Greek alphabet</h1>
				</div>

				<div className="grid md:grid-cols-2 grid-cols-1">
					<QuizChoice choice={"Epsilon"}/>
					<QuizChoice choice={"Epsilon"}/>
					<QuizChoice choice={"Epsilon"}/>
					<QuizChoice choice={"Epsilon"}/>
				</div>
			</div>
		</>
	);
};

export default QuizPage;