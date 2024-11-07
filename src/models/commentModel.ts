import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    postId: { type: mongoose.Types.ObjectId, ref: "Post" },
    comment: { type: String, required: true },
    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }]

})
export const CommentModel = mongoose.model("Comment", commentSchema)