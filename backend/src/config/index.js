import mongoose from "mongoose";

export default async function CONNECT_DB() {
		try {
				return await mongoose.connect(process.env.DB_CONNECT);
		} catch (error) {
				console.error("MongoDB connection error:", error.message);
		}
}