// Local Imports

// 3rd Party Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<>
			<div className="w-screen h-28 bg-custom-grey px-[15%] sticky top-0">
				<div className="flex flex-row h-28 items-center">
					<h1 className="flex-1 font-alte-bold text-4xl">
						<span className="text-white">Quiz</span>
						<span className="text-custom-red">Me</span>
					</h1>

					<div className="flex w-12 h-12 bg-custom-dark-grey rounded-xl items-center justify-center">
						<FontAwesomeIcon icon={faSun} size={"xl"} style={{ color: "#8C8C8C" }} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;