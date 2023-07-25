import { useEffect, useState } from "react";
import Post from "./Post";

import PostModel from "../models/PostModel";

function PageOfPosts() {
	const [posts, setPosts] = useState<PostModel[]>();

	useEffect(() => {
		fetch(`http://localhost:3001/posts?page=3`)
			.then((response) => response.json())
			.then((data) => setPosts(data.results));
	}, []);

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
