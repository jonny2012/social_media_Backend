import { Router } from "express";
import userController from "../controllers/userController";

const router = Router()

router.get("/user", userController.getAllUsers)
router.get("/user/:id", userController.getAllUserDataByUserId)
router.put("/user/followers/:id", userController.updateFollowers)
router.put("/user/following:id", userController.updateUserFollowing)
router.put("/user/profile-image/:id", userController.updateUserProfileImage)