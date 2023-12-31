/* eslint-disable react/prop-types */
// 3rd Party Imports
import { useLocation, useNavigate } from "react-router-dom";

const DifficultyChoice = (props) => {
	const processedLocation = useLocation().pathname.replace("/difficulty", "");
	const navigate = useNavigate();

	const handleButtonClick = () => {
		props.handleToggleAnimation();
		setTimeout(() => {
			navigate(`${processedLocation}/${props.value}/quiz`);
		}, "900");
	};

	return (
		<>
			<button onClick={handleButtonClick}>
				<div className="flex w-96 h-20 bg-custom-red hover:bg-custom-red-hover text-white rounded-xl items-center justify-center shadow-custom-red">
					<h1 className="font-alte-bold text-3xl">{props.choice}</h1>
				</div>
			</button>
		</>
	);
};

export default DifficultyChoice;