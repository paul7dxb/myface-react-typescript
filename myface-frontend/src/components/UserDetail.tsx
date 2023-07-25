import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserModel from "../models/UserModel";
import User from "./User";
import Post from "./Post";
import PostModel from "../models/PostModel";

function UserDetail() {
	let { userID } = useParams();

	const [user, setUser] = useState<UserModel>();
    const [usersPosts, setUsersPosts] = useState<PostModel[]>();


	useEffect(() => {
		fetch(`http://localhost:3001/users/${userID}`)
			.then((response) => response.json())
			.then((data) => {
				setUser(data.user);
                setUsersPosts(data.userPosts.results)
                console.log(data)
			});
	}, []);

	return (
		<div>

			{user === undefined ? (
				<p>User Not Found!</p>
			) : (
				<div>
					<User userData={user} />
				</div>
			)}

			{usersPosts === undefined ? (
				<p>No posts found!</p>
			) : (
                usersPosts.map((post) => <Post key={post.id} postData={post} />)
			)}
			
		</div>
	);
}

export default UserDetail;
