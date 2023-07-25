import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserModel from "../models/UserModel";
import User from "./User";
import Post from "./Post";


function UserDetail(){

    let { userID } = useParams();

    const [user, setUser] = useState<UserModel>();

	useEffect(() => {
		fetch(`http://localhost:3001/users/${userID}`)
			.then((response) => response.json())
			.then((data) => setUser(data));
	}, []);

    return (
        <div>         
            {user === undefined ? <p>User Not Found!</p> :( <div>
            <User userData={user} />            
                {/* {user.posts.map((post) => <Post postData={post} />}) */}
            </div>
            )}
        </div>        
        )

        
}

 export default UserDetail