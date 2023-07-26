import UserModel from "../../models/UserModel";
import { Link } from "react-router-dom";
import "./User.scss";

interface UserProps {
	userData: UserModel;
}

function User({ userData }: UserProps) {
	return (
		<div className="user-profile">
			<img
				className="user-cover-image"
				onError={({ currentTarget }) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src =
						"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
				}}
				src={userData.coverImageUrl}
			/>
			<div className="user-details-container">
				<img
					className="user-profile-image"
					onError={({ currentTarget }) => {
						currentTarget.onerror = null; // prevents looping
						currentTarget.src =
							"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'";
					}}
					src={userData.profileImageUrl}
				/>
				<div className="user-text">
					<p className="user-name">{userData.name}</p>
					<Link
						className="user-username"
						to={`/users/${userData.id}`}
					>
						{userData.username}
					</Link>
					<p className="user-email">{userData.email}</p>
				</div>
			</div>
		</div>
	);
}

export default User;
