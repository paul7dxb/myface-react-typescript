import express from "express";
import {createUser, getPageOfUsers, getUser} from "../services/userService";
import {CreateUserRequest} from "../models/api/createUserRequest";
import { body, validationResult } from "express-validator";
import { getPageOfInteractedPosts, getUserPosts } from "../services/postService";


const router = express.Router();

router.get('/', async (request, response) => {
    const page = request.query.page ? parseInt(request.query.page as string) : 1;
    const pageSize = request.query.pageSize ? parseInt(request.query.pageSize as string) : 10;

    const userList = await getPageOfUsers(page, pageSize);
    return response.status(200).json(userList)
});

router.post('/create/',
    body('name').notEmpty(),
    body('username').notEmpty().isLowercase().not().contains(" "),
    body('email').notEmpty().isEmail(),
    body('coverImageUrl').notEmpty(),
    body('profileImageUrl').notEmpty(),
    async (request, response) => {

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }
    const user = request.body;

    await createUser(user as CreateUserRequest);
    return response.sendStatus(200)
});

router.get('/:userId/', async (request, response) => {
    const userId = parseInt(request.params.userId);

    const user = await getUser(userId);

    const userPosts = await getUserPosts(1,10,userId)
    const likedPosts = await getPageOfInteractedPosts(1,10,userId,"LIKE")
    const dislikedPosts = await getPageOfInteractedPosts(1,10,userId,"DISLIKE")

    const results = {user, userPosts, likedPosts, dislikedPosts }
    
    return response.status(200).json(results);
});

export default router;