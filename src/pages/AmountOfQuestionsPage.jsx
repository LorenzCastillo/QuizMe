// Local Imports
import AmountChoice from "../components/AmountChoice";
import Navbar from "../components/Navbar";

const AmountOfQuestionsPage = () => {
	return (
		<>
			<Navbar/>
			<div className="flex flex-col w-full my-10 items-center">
				<h1 className="font-alte-bold text-4xl ">
					<span className="text-white">Choose the</span>
					<span className="text-custom-red"> amount </span>
					<span className="text-white">of</span>
				</h1>
				<h1 className="font-alte-bold text-4xl">
					<span className="text-white">questions for your quiz</span>
				</h1>

				<div className="flex flex-col mt-8 gap-8">
					<AmountChoice choice={10} />
					<AmountChoice choice={15} />
					<AmountChoice choice={20} />
				</div>
			</div>
		</>
	);
};

export default AmountOfQuestionsPage;