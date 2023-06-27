/* eslint-disable react/jsx-key */
// Local Imports
import QuizChoiceCard from "../components/QuizChoiceCard";
import Navbar from "../components/Navbar";
import Categories from "../../categories.json";
// 3rd Party Imports
import { useState } from "react";

const HomePage = () => {
	const [categories] = useState(Categories);

	return (
		<>
			<Navbar/>

			<div className="flex w-full my-10 justify-center">
				<h1 className="font-alte-bold text-4xl">
					<span className="text-white">Choose your</span>
					<span className="text-custom-red"> Quiz</span>
				</h1>
			</div>

			<div className="flex justify-center">
				<div className="grid 3xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-4 sm:px-[15%]">
					{
						categories.map((item) => {
							return (
								<QuizChoiceCard title={item.category} description={item.description} value={item.value}/>
							);
						})
					}
				</div>
			</div>

		</>
	);
};

export default HomePage;