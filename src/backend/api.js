import express from "express";
const app = express();
import axios from "axios";
import cors from "cors";

const port = 9001;

// CORS middleware
app.use(cors());

app.get("/api", async (req, res) => {
	const response = await axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");

	res
		.status(200)
		.json(response.data);
});

app.listen(port, () => {
	console.log(`App is now running on port ${port}`);
});