import Post from "../models/Post.js";

export const getAllPosts = async () => {
		return Post.find();
}

export const getPostById = async (id) => {
		return Post.findById(id)
}

export const deletePostById = async (id) => {
		return Post.findByIdAndDelete(id)
}

export const updatePostById = async (id, post) => {
		return Post.findByIdAndUpdate(id, post, {new: true})
}

export const createPost = async (post) => {
		const newPost = new Post(post)
		return await newPost.save()
}