import { useEffect, useState } from "react";
import User from "../../components/user/User";
import UserModel from "../../models/UserModel";
import { useSearchParams, Link } from "react-router-dom";

import "./Users.scss"

function PageOfUsers() {
	const [users, setUsers] = useState<UserModel[]>();

	let [searchParams] = useSearchParams();

	const pageNumberQuery = searchParams.get('page');
	let pageNumber:number;
	pageNumberQuery ? pageNumber = parseInt(pageNumberQuery) : pageNumber = 1;

	useEffect(() => {
		fetch(`http://localhost:3001/users?page=${pageNumber}`)
			.then((response) => response.json())
			.then((data) => setUsers(data.results));
	}, [searchParams]);

	return (
		<>
			<h1>Users Page</h1>
			{users === undefined ? (
				<p>Loading...</p>
			) : (
				<div className="user-list">
					{users?.map((user) => <User key={user.id} userData={user} />)}
				</div>
			)}

			<div className="page-navigation">
				{pageNumber>1 ? <Link className="user-nav-buttons" to={`/users?page=${pageNumber-1}`} >Previous</Link> : undefined}
				<Link className="user-nav-buttons" to={`/users?page=${pageNumber+1}`} >Next</Link>
			</div>

		</>
	);
}

export default PageOfUsers;
