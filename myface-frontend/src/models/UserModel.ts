interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
}

interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

export default UserModel