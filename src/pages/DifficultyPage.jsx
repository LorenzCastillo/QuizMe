// Local Imports
import AmountChoice from "../components/AmountChoice";
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
					<AmountChoice choice={"Easy"} />
					<AmountChoice choice={"Medium"} />
					<AmountChoice choice={"Hard"} />
				</div>
			</div>
		</>
	);
};

export default DifficultyPage;