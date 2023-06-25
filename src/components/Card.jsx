/* eslint-disable react/prop-types */

const Card = (props) => {
	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col w-96 h-72 bg-custom-grey rounded-xl">
					<div className="flex w-full h-14 py-8 mb-4 justify-center text-center px-4">
						<h1 className="font-alte-bold text-2xl text-white">{props.title}</h1>
					</div>

					<div className="flex w-full h-60 pt-6 px-6 text-center justify-">
						<p className="font-alte-rg text-xl text-white">{props.description}</p>
					</div>

					<div className="flex w-full h-full justify-center items-center">
						<div className="flex w-52 h-14 bg-custom-red rounded-lg justify-center items-center">
							<p className="font-alte-bold text-white text-xl">Take Quiz</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;