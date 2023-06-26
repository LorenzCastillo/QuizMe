/* eslint-disable react/prop-types */
const QuizOption = (props) => {
	return (
		<>
			<div className="flex w-96 h-20 bg-custom-red text-white rounded-lg items-center mx-4 my-2 px-12">
				<h1 className="font-alte-bold text-2xl">{props.choice}</h1>
			</div>
		</>
	);
};

export default QuizOption;