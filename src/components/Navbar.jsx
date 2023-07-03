// Local Imports
import QuizContext from "../context/QuizContext";
// 3rd Party Imports
import { Link } from "react-router-dom";
import { useContext } from "react";

const Navbar = () => {
	const { resetValues } = useContext(QuizContext);

	return (
		<>
			<div className="w-screen h-28 bg-custom-grey px-[15%] sticky top-0 z-10">
				<div className="flex flex-row h-28 items-center">
					<h1 className="font-alte-bold text-4xl">
						<Link to={"/"}>
							<button onClick={resetValues}>
								<span className="text-white">Quiz</span>
								<span className="text-custom-red">Me</span>
							</button>
						</Link>
					</h1>
				</div>
			</div>
		</>
	);
};

export default Navbar;