/* eslint-disable react/prop-types */
// Local Imports
import { Link, useLocation } from "react-router-dom";

const AmountChoice = (props) => {
	const processedLocation = useLocation().pathname.replace("/amount", "");

	return (
		<>
			<Link to={`${processedLocation}/${props.choice}/difficulty`}>
				<div className="flex w-96 h-20 bg-custom-red text-white rounded-xl items-center justify-center">
					<h1 className="font-alte-bold text-3xl">{props.choice}</h1>
				</div>
			</Link>
		</>
	);
};

export default AmountChoice;