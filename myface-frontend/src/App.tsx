// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/RootLayout";
import PageOfPosts from "./components/PageOfPosts";
import PageOfUsers from "./components/PageOfUsers";
import UserDetail from "./components/UserDetail";

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
