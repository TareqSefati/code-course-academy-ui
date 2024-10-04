import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { ROUTES } from "../routes/Routes";
import HomePage from "../pages/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
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
			{
				path: `${ROUTES.PRODUCTS}`,
				element: <Products />,
                loader: ()=> fetch(`https://code-course-academy-server.vercel.app/api/products`)
			},
			{
				path: `${ROUTES.SINGLE_PRODUCT.STATIC}`,
				element: <ProductDetails />,
                // loader: ()=> fetch(`https://code-course-academy-server.vercel.app/api/products`)
			},
		],
	},
	// {
	//     path: "*",
	//     element: <NotFoundPage />,
	// },
]);

export default router;
