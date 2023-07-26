// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import RootLayout from "./components/layout/RootLayout";
import PageOfPosts from "./pages/posts/Posts";
import PageOfUsers from "./pages/users/Users";
import UserDetail from "./components/user/UserDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		// loader: rootLoader,
		children: [
		  {
		    path: "posts",
		    element: <PageOfPosts />,
		  },
		  {
		    path: "users",
		    element: <PageOfUsers />,
		  },
		  {
		    path: "users/:userID",
		    element: <UserDetail />,
		  },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
