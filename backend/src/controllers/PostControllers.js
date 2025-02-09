import { getAllPosts } from "../services/postServices.js";

export const getAllPostsController = async (req, res) => {
		try {
				const posts = await getAllPosts();
				if (!posts)
						return res.status(404).send('No posts found');
				return res.status(200).json(posts)
		} catch (error) {
				console.error("Error fetching posts:", error);
				return res.status(500).json({ message: "Something went wrong", error: error.message });
		}
}