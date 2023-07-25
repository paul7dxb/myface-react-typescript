import UserModel from "../models/UserModel";
import { Link } from "react-router-dom";

interface UserProps {
	userData: UserModel;
}

function User({ userData }: UserProps) {
	return (
		<div>
			<img
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={userData.coverImageUrl}
			/>
			<img
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={userData.profileImageUrl}
			/>
			<p>{userData.name}</p>
			<Link to={`/users/${userData.id}`} >{userData.username}</Link>
			<p>{userData.email}</p>         
		</div>
	);
}

export default User