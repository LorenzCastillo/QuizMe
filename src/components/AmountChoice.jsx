const AmountChoice = (props) => {
	return (
		<>
			<div className="flex w-96 h-20 bg-custom-red text-white rounded-xl items-center justify-center">
				<h1 className="font-alte-bold text-3xl">{props.choice}</h1>
			</div>
		</>
	);
};

export default AmountChoice;