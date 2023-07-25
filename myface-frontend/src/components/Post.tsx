import { Link } from "react-router-dom";
import PostModel from "../models/PostModel";

interface PostProps {
	postData: PostModel;
}

function formatDate(dateString:string){
	const date = new Date(dateString)
	return date.toLocaleDateString("en-GB")
}

function Post({ postData }: PostProps) {
	return (
		<div>			
			<img
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={postData.imageUrl}
			/>
			<Link to={`/users/${postData.postedBy.id}`}>Posted by {postData.postedBy.username}</Link>
			<p>{formatDate(postData.createdAt)}</p>
			<p>{postData.message}</p>			
		</div>
	);
}

export default Post