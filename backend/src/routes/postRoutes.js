import express from "express";
import {
		createPostController,
		deletePostController,
		getAllPostsController, getPostByIdController,
		updatePostController
} from "../controllers/PostControllers.js";


const router = express.Router();

router.get("/", getAllPostsController)
router.get("/:id", getPostByIdController);
router.post("/", createPostController);
router.put("/:id", updatePostController);
router.delete("/:id", deletePostController);

export default router;

