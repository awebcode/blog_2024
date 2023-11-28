import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
  getUsers,
  dashboardDatas,
  getUserById,
  updateUserProfile,
  deleteUser,
} from "../controllers/userControllers.js";
import { authGuard } from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/profile", authGuard, userProfile);
router.get("/dashboardDatas", authGuard, dashboardDatas);
router.put("/updateProfile", authGuard, updateProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);
//admin

// Define routes
router.get('/:id', getUserById); // Route to get a single user by ID
router.put('/edit-user/:id', updateUserProfile); // Route to update user profile
router.delete('/delete-user/:id', deleteUser); // Route to update user profile


export default router;
