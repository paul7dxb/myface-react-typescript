import UserModel from "../models/UserModel";
import { NavLink } from "react-router-dom";

interface UserProps {
	userData: UserModel;
}

function User({ userData }: UserProps) {
	return (
		<div>
			<p>{userData.id}</p>
            <NavLink to={`/users/${userData.id}`} >{userData.username}</NavLink>
			<p>{userData.name}</p>
			<img
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={userData.profileImageUrl}
			/>
		</div>
	);
}

export default User