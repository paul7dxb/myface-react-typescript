// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import RootLayout from "./components/layout/RootLayout";
import PageOfPosts from "./pages/posts/Posts";
import PageOfUsers from "./pages/users/Users";
import UserDetail from "./components/user/UserDetail";
import ErrorPage from "./pages/ErrorPage";
import CreateUser from "./pages/users/CreateUser";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		// loader: rootLoader,
		children: [
		  {
		    path: "/",
		    element: <PageOfPosts />,
		  },
		  {
		    path: "posts",
		    element: <PageOfPosts />,
		  },
		  {
		    path: "users",
		    element: <PageOfUsers />,
		  },
		  {
		    path: "users/create",
		    element: <CreateUser />,
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
