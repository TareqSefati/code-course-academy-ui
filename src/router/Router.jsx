import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ROUTES } from "../routes/Routes";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
	{
		path: `${ROUTES.HOME}`,
		element: <MainLayout />,
		// errorElement: <NotFoundPage />,
		children: [{
            path: `${ROUTES.HOME}`,
            element: <HomePage />
        }],
	},
	// {
	//     path: "*",
	//     element: <NotFoundPage />,
	// },
]);

export default router;
