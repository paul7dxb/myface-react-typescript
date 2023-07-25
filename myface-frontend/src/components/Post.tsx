import PostModel from "../models/PostModel";

interface PostProps {
	postData: PostModel;
}

function Post({ postData }: PostProps) {
	return (
		<div>
			<p>{postData.id}</p>
			<p>{postData.message}</p>
			<img
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={postData.imageUrl}
			/>
			<p>{postData.createdAt}</p>
			<p>{postData.id}</p>
		</div>
	);
}

export default Post