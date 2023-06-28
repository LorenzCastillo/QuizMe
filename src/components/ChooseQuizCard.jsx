/* eslint-disable react/prop-types */
// 3rd Party Imports
import { useNavigate } from "react-router-dom";

const ChooseQuizCard = (props) => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		props.handleToggleAnimation();
		setTimeout(() =>{
			navigate(`/${props.value}/amount`);
		}, "900");
	};

	return (
		<>
			<div className={`flex flex-col w-96 h-72 bg-custom-grey rounded-xl animate-card ${props.animateState}`}>
				<div className="flex w-full h-14 py-8 mb-4 justify-center text-center px-4">
					<h1 className="font-alte-bold text-2xl text-white">{props.title}</h1>
				</div>

				<div className="flex w-full h-60 pt-6 px-6 text-center justify-center">
					<p className="font-alte-rg text-xl text-white">{props.description}</p>
				</div>

				<div className="flex w-full h-full justify-center items-center">
					<button onClick={handleButtonClick}>
						<div className="flex w-52 h-14 bg-custom-red hover:bg-custom-red-hover shadow-custom-red rounded-lg justify-center items-center">
							<p className="font-alte-bold text-white text-xl">Take Quiz</p>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default ChooseQuizCard;