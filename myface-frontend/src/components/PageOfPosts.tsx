import { useEffect, useState } from "react";
import Post from "./Post";
import PostModel from "../models/PostModel";
import { useSearchParams, Link } from "react-router-dom";

import "./PageOfPosts.css"


function PageOfPosts() {
	const [posts, setPosts] = useState<PostModel[]>();

	let [searchParams] = useSearchParams();

	const pageNumberQuery = searchParams.get('page');
	let pageNumber:number;
	pageNumberQuery ? pageNumber = parseInt(pageNumberQuery) : pageNumber = 1;

	useEffect(() => {
		fetch(`http://localhost:3001/posts?page=${pageNumber}`)
			.then((response) => response.json())
			.then((data) => setPosts(data.results));
	}, [searchParams]);

	return (
		<>
			{posts === undefined ? (
				<p>Loading...</p>
			) : (
				posts?.map((post) => <Post key={post.id} postData={post} />)
			)}

			{pageNumber > 1 ? <Link className="post-nav-buttons" to={`/posts?page=${pageNumber-1}`} >Previous</Link> : undefined}
			<Link className="post-nav-buttons" to={`/posts?page=${pageNumber+1}`} >Next</Link>

		</>
	);
}

export default PageOfPosts;
