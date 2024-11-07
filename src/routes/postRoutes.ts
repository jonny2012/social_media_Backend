import { Router } from "express";
import postController from "../controllers/postController";

const router = Router()

router.post("/post", postController.createPost)
router.get("/post", postController.getAllPosts)
router.get("/post/:id", postController.getAllPostsByUserId)
router.put("/post/add-comment/:id", postController.updatePostComments)
router.put("/post/add-like/:id", postController.updatePostLikes)
router.put("/post/remove-like/:id", postController.removePostLikes)

export default router