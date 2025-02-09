import express from 'express';
import CONNECT_DB from "./src/config/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

async function startApp () {
		try {
				await CONNECT_DB();
				app.listen(port, () => console.log(`Server started on port ${port}`));
		} catch ( error ) {
				console.error("MongoDB connection error:", error.message);
		}
}

await startApp();