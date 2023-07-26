import { Link } from "react-router-dom";
import PostModel from "../../models/PostModel";
import './Post.scss';

interface PostProps {
	postData: PostModel;
}

function formatDate(dateString:string){
	const date = new Date(dateString)
	return date.toLocaleDateString("en-GB")
}

function Post({ postData }: PostProps) {
	return (
		<div className="post-card">			
			<img className="post-image"
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={postData.imageUrl}
			/>
			<div className="post-details">
				<Link className="post-user-name" to={`/users/${postData.postedBy.id}`}> {postData.postedBy.username}</Link>
				<p className="post-date"> {formatDate(postData.createdAt)}</p>
				<p className="post-message">{postData.message}</p>	
			</div>
		</div>
	);
}

export default Post