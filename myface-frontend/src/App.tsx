// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/RootLayout";
import PageOfPosts from "./components/PageOfPosts";

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
		],
	},
]);

function App() {
return <RouterProvider router={router} />;
}

export default App;
