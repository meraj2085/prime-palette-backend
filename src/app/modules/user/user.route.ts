import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
const router = express.Router();

// Routes
router.get(
  "/my-profile",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserController.getMyProfile
);
router.patch(
  "/my-profile",
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  UserController.updateMyProfile
);
router.get("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser);
router.get("/", auth(ENUM_USER_ROLE.ADMIN), UserController.getUsers);
router.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.updateUser);
router.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

export const UserRoutes = router;
