/* eslint-disable react/prop-types */
// Local Imports
import { Link, useLocation } from "react-router-dom";

const DifficultyChoice = (props) => {
	const processedLocation = useLocation().pathname.replace("/difficulty", "");

	return (
		<>
			<Link to={`${processedLocation}/${props.value}/quiz`}>
				<div className="flex w-96 h-20 bg-custom-red text-white rounded-xl items-center justify-center">
					<h1 className="font-alte-bold text-3xl">{props.choice}</h1>
				</div>
			</Link>
		</>
	);
};

export default DifficultyChoice;