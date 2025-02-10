import express from 'express';
import CONNECT_DB from "./src/config/index.js";
import dotenv from "dotenv";
import router  from "./src/routes/postRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/posts", router);

async function startApp () {
		try {
				await CONNECT_DB();
				app.listen(port, () => console.log(`Server started`));
		} catch ( error ) {
				console.error("MongoDB connection error:", error.message);
		}
}

await startApp();