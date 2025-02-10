import { createPost, deletePostById, getAllPosts, getPostById, updatePostById } from "../services/postServices.js";

export const getAllPostsController = async (req, res) => {
		try {
				const posts = await getAllPosts();
				if (!posts || posts.length === 0) {
						return res.status(404).json({ message: "No posts found" });
				}
				return res.status(200).json(posts);
		} catch (error) {
				console.error("Error fetching posts:", error);
				return res.status(500).json({ message: "Something went wrong", error: error.message });
		}
};

export const getPostByIdController = async (req, res) => {
		try {
				const { id } = req.params;
				const post = await getPostById(id);
				if (!post) {
						return res.status(404).json({ message: "No post found" });
				}
				return res.status(200).json(post);
		} catch (error) {
				console.error("Error fetching post:", error);
				return res.status(500).json({ message: "Something went wrong", error: error.message });
		}
};

export const deletePostController = async (req, res) => {
		try {
				const { id } = req.params;
				const post = await deletePostById(id);
				if (!post) {
						return res.status(404).json({ message: "No post found to delete" });
				}
				return res.status(200).json({ message: "Post deleted successfully" });
		} catch (error) {
				console.error("Error deleting post:", error);
				return res.status(500).json({ message: "Something went wrong", error: error.message });
		}
};

export const updatePostController = async (req, res) => {
		try {
				const { id } = req.params;
				const data = req.body;
				
				const post = await updatePostById(id, data);
				if (!post) {
						return res.status(400).json({ message: "No post found to update" });
				}
				return res.status(200).json(post);
		} catch (error) {
				console.error("Error updating post:", error);
				return res.status(500).json({ message: "Something went wrong", error: error.message });
		}
};

export const createPostController = async (req, res) => {
		try {
				const { title, description } = req.body;
				if (!title || !description) {
						return res.status(400).json({ message: "Title and description are required" });
				}
				const post = await createPost({ title, description });
				if (!post) {
						return res.status(500).json({ message: "Failed to create post" });
				}
				return res.status(201).json(post);
		} catch (error) {
				console.error("Error creating post:", error);
				return res.status(500).json({ message: "Something went wrong", error: error.message });
		}
};
