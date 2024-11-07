import { PostModel } from "../models/postModel";

class PostService {

    async createPost(userId: string, image: string) {

        const newPost = await PostModel.create({ userId, image })
        return newPost
    }
    async findAllPosts() {

        const allPosts = await PostModel.find().populate("likes").populate({ path: "comments", populate: { path: "userId" } })
        return allPosts
    }

    async findPostsById(userId: string) {
        const userPosts = await PostModel.find({ _id: userId })
        return userPosts
    }
    async updatePostComments(postId: any, commentId: any) {

        const updatedPost = await PostModel.findByIdAndUpdate({ _id: postId }, { $push: { comments: commentId } })
        return updatedPost
    }
    async updateLikes(postId: any, userId: string) {

        const updatedPost = await PostModel.findByIdAndUpdate({ _id: postId }, { $addToSet: { likes: userId } }, { new: true })
        return updatedPost
    }
    async removeLikes(postId: any, userId: string) {

        const updatedPost = await PostModel.findByIdAndUpdate({ _id: postId }, { $pull: { likes: userId } }, { new: true })
        return updatedPost
    }

}
export default new PostService()