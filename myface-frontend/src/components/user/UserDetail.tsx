import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserModel from "../../models/UserModel";
import User from "./User";
import Post from "../post/Post";
import PostModel from "../../models/PostModel";
import './UserDetail.scss'

function UserDetail() {
	let { userID } = useParams();

    const [isLoading, setIsLoading] = useState(true);

	const [user, setUser] = useState<UserModel>();
    const [usersPosts, setUsersPosts] = useState<PostModel[]>();

    const [usersLikedPosts, setUsersLikedPosts] = useState<PostModel[]>();
    const [usersDislikedPosts, setUsersDislikedPosts] = useState<PostModel[]>();

	useEffect(() => {
		fetch(`http://localhost:3001/users/${userID}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(data.user);
                setUsersPosts(data.userPosts.results)
                setUsersLikedPosts(data.likedPosts.results)
                setUsersDislikedPosts(data.dislikedPosts.results)
			});
	}, [userID]);

    useEffect(() => {
        setIsLoading(user === undefined
            || usersPosts === undefined
            || usersLikedPosts === undefined
            || usersDislikedPosts === undefined
            )
    }, [user, usersPosts, usersLikedPosts, usersDislikedPosts]);

	return (
		<div>
			{isLoading ? (
				<p>User Not Found!</p>
			) : (
				<div>
					<User userData={user!} />
					<h3 className="postlist-heading">{user!.name}'s Posts</h3>
                    <div className="user-posts">
						{usersPosts!.map((post) => <Post key={post.id} postData={post} />)}
					</div>
					<h3 className="postlist-heading">Posts {user!.name} Liked </h3>
					<div className="user-liked-posts">
						{usersLikedPosts!.map((post) => <Post key={post.id} postData={post} />)}
					</div>                                       
                    <h3 className="postlist-heading">Posts {user!.name} Disliked </h3>
					<div className="user-disliked-posts">
						{usersDislikedPosts!.map((post) => <Post key={post.id} postData={post} />)}
					</div>
				</div>
			)}
		</div>
	);
}

export default UserDetail;
