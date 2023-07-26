import { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import PostModel from "../../models/PostModel";
import { useSearchParams, Link } from "react-router-dom";

import "./Posts.scss"


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
			<h1>Posts Page</h1>
			{posts === undefined ? (
				<p>Loading...</p>
			) : (
				<div className="post-list">
					{posts?.map((post) => <Post key={post.id} postData={post} />)}
				</div>
				
			)}

			<div className="page-navigation">
				{pageNumber > 1 ? <Link className="post-nav-buttons" to={`/posts?page=${pageNumber-1}`} >Previous</Link> : undefined}
			<Link className="post-nav-buttons" to={`/posts?page=${pageNumber+1}`} >Next</Link>
			</div>
			

		</>
	);
}

export default PageOfPosts;
