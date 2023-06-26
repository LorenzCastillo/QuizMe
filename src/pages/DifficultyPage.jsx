// Local Imports
import DifficultyChoice from "../components/DifficultyChoice";
import Navbar from "../components/Navbar";

const DifficultyPage = () => {
	return (
		<>
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<h1 className="font-alte-bold text-4xl ">
					<span className="text-white">Select your</span>
					<span className="text-custom-red"> Difficulty</span>
				</h1>

				<div className="flex flex-col mt-8 gap-8">
					<DifficultyChoice choice={"Easy"} value={"easy"} />
					<DifficultyChoice choice={"Medium"} value={"medium"} />
					<DifficultyChoice choice={"Hard"} value={"hard"} />
				</div>
			</div>
		</>
	);
};

export default DifficultyPage;