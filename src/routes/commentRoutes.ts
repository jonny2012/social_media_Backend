import { Router } from "express";
import CommentController from "../controllers/commentController";

const router = Router()

router.post("/comment", CommentController.createComment)
router.get("/comment/:postId", CommentController.getAllPostComments)



export default router