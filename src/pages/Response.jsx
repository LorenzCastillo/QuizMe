import { useEffect, useState } from "react";
import axios from "axios";

const Response = () => {

	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:9001/api");
			setData(response.data.results);
			console.log(response.data.results)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="text-white">
				{data.map((el, i) => {
					return (
						<div key={i}>
							{el.question}
						</div>
					)
				})
				}
			</div>
		</>
	);
};

export default Response;