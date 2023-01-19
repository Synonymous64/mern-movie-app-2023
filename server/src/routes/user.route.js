import express from 'express';
import { body } from 'express-validator';
import favoriteController from '../controllers/favorite.controller.js';
import userController from '../controllers/user.controller.js';
import requestHandler from '../handlers/request.handler.js';
import userModel from '../models/user.model.js';
import tokenMiddleware from '../middlewares/token.middleware.js';

const router = express.Router();

router.post(
    "/signup",
    body("username")
        .exists().withMessage("Username is required")
        .isLength({ min: 8 }).withMessage("Username minimum 8 characters")
        .custom(async value => {
            const user = await userModel.findOne({ username: value })
            if (user) return Promise.reject("Username already exist");
        }),
    body("password")
        .exists().withMessage("Password is required")
        .isLength({ min: 8 }).withMessage("password minimum 8 characters"),
    body("confirmPassword")
        .exists().withMessage("Confirm Password is required")
        .isLength({ min: 8 }).withMessage("Confirm Password minimum 8 characters")
        .custom((value, { req }) => {
            if (value !== req.body.password) throw new Error("Confirm password not matched")
            return true;
        }),
    body("displayName")
        .exists().withMessage("Display name is required")
        .isLength({ min: 8 }).withMessage("Display name minimum 8 characters"),
    requestHandler.validate,
    userController.signup
);

router.post(
    "/signin",
    body("username")
        .exists().withMessage("Username is required")
        .isLength({ min: 8 }).withMessage("Username minimum 8 characters"),
    body("password")
        .exists().withMessage("Password is required")
        .isLength({ min: 8 }).withMessage("Password minimum 8 characters"),
    requestHandler.validate,
    userController.signin
);

router.put(
    "/update-password",
    tokenMiddleware.auth,
    body("password")
        .exists().withMessage("password is required")
        .isLength({ min: 8 }).withMessage("password minimum 8 characters"),
    body("newPassword")
        .exists().withMessage("New Password is required")
        .isLength({ min: 8 }).withMessage("New Password minimum 8 characters"),
    body("confirmNewPassword")
        .exists().withMessage("Confirm New Password is required")
        .isLength({ min: 8 }).withMessage("Confirm New Password minimum 8 characters")
        .custom((value, { req }) => {
            if (value !== req.body.newPassword) throw new Error("Confirm New Password not matched")
            return true;
        }),
    requestHandler.validate,
    userController.updatePassword
);

router.get(
    "/info",
    tokenMiddleware.auth,
    userController.getInfo
);

router.get(
    "/favorites",
    tokenMiddleware.auth,
    favoriteController.getFavoritesOfUser
);

router.post(
    "/favorites",
    tokenMiddleware.auth,
    body("mediaType")
        .exists().withMessage("mediaType is required")
        .custom(type => ["movie", "tv"].includes(type)).withMessage("mediaType invalid"),
    body("mediaId")
        .exists().withMessage("mediaId is required")
        .isLength({ min: 1 }).withMessage("mediaId can not be empty"),
    body("mediaTitle")
        .exists().withMessage("mediaTitle is required"),
    body("mediaPoster")
        .exists().withMessage("mediaPoster is required"),
    body("mediaRate")
        .exists().withMessage("mediaRate is required"),
    requestHandler.validate,
    favoriteController.addFavorite
);

router.delete(
    "/favorites/:favoriteId",
    tokenMiddleware.auth,
    favoriteController.removeFavorite
);

export default router;