interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

export interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default PostModel