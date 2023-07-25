import { useEffect, useState } from "react";
import Post from "./Post";

interface PostModel {
	id: number;
	message: string;
	imageUrl: string;
	createdAt: string;
	postedBy: PostUserModel;
	likedBy: PostUserModel[];
	dislikedBy: PostUserModel[];
}

interface PostUserModel {
	id: number;
	name: string;
	username: string;
	email: string;
}

function PageOfPosts() {
	const [posts, setPosts] = useState<PostModel[]>();

	useEffect(() => {
		fetch("http://localhost:3001/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data.results));
	}, []);

	console.log(posts);

	return (
		<>
			<h2>Page # of Posts</h2>
			{posts === undefined ? (
				<p>Loading...</p>
			) : (
				posts?.map((post) => <Post key={post.id} postData={post} />)
			)}
		</>
	);
}

export default PageOfPosts;
