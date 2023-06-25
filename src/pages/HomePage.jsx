// Local Imports
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Categories from "../../categories.json";
import { useState } from "react";

const HomePage = () => {
	const [categories, setCategories] = useState(Categories);

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
							// eslint-disable-next-line react/jsx-key
								<Card title={item.category} description={item.description}/>
							);
						})
					}
				</div>
			</div>

		</>
	);
};

export default HomePage;