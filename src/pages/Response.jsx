import { useEffect, useState } from "react";
import axios from "axios";

const Response = () => {

	const [data, setData] = useState({});

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:9001/api");
			const jsonData = response.data;
			console.log(jsonData)
			setData(jsonData);
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
			</div>
		</>
	);
};

export default Response;