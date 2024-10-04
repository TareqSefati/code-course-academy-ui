import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ROUTES } from "../routes/Routes";
import HomePage from "../pages/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
const router = createBrowserRouter([
	{
		path: `${ROUTES.HOME}`,
		element: <MainLayout />,
		// errorElement: <NotFoundPage />,
		children: [
			{
				path: `${ROUTES.HOME}`,
				element: <HomePage />,
			},
			{
				path: `${ROUTES.LOGIN}`,
				element: <Login />
			},
			{
				path: `${ROUTES.REGISTER}`,
				element: <Register />
			},
		],
	},
	// {
	//     path: "*",
	//     element: <NotFoundPage />,
	// },
]);

export default router;
