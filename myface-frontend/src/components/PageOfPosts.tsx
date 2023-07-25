import { useEffect, useState } from "react";
import Post from "./Post";
import PostModel from "../models/PostModel";
import { useSearchParams, NavLink } from "react-router-dom";

import "./PageOfPosts.css"



function PageOfPosts() {
	const [posts, setPosts] = useState<PostModel[]>();

	let [searchParams, setSearchParams] = useSearchParams();

	const pageNumberQuery = searchParams.get('page');
	let pageNumber:number;
	pageNumberQuery ? pageNumber = parseInt(pageNumberQuery) : pageNumber = 1;

	// function changePageHandler(newPageNumber:number){
	// 	setSearchParams(newPageNumber);
	// }

	useEffect(() => {
		fetch(`http://localhost:3001/posts?page=${pageNumber}`)
			.then((response) => response.json())
			.then((data) => setPosts(data.results));
	}, [searchParams]);

	return (
		<>
			<h2>Page # of Posts</h2>
			{posts === undefined ? (
				<p>Loading...</p>
			) : (
				posts?.map((post) => <Post key={post.id} postData={post} />)
			)}

			{/* <button onClick={changePageHandler(pageNumber+1)}>Next</button> */}

			{pageNumber>1 ? <NavLink className="post-nav-buttons" to={`/posts?page=${pageNumber-1}`} >Previous</NavLink> : undefined}
			<NavLink className="post-nav-buttons" to={`/posts?page=${pageNumber+1}`} >Next</NavLink>

		</>
	);
}

export default PageOfPosts;
