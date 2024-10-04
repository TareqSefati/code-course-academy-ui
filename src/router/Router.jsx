import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import Register from "../components/Register";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { ROUTES } from "../routes/Routes";
import PrivateRouter from "./PrivateRouter";
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
				element: <Login />,
			},
			{
				path: `${ROUTES.REGISTER}`,
				element: <Register />,
			},
			{
				path: `${ROUTES.PRODUCTS}`,
				element: (
					<PrivateRouter>
						<Products />
					</PrivateRouter>
				),
				loader: () =>
					fetch(
						`https://code-course-academy-server.vercel.app/api/products`
					),
			},
			{
				path: `${ROUTES.SINGLE_PRODUCT.STATIC}`,
				element: (
					<PrivateRouter>
						<ProductDetails />
					</PrivateRouter>
				),
				loader: ({ params }) =>
					fetch(
						`https://code-course-academy-server.vercel.app/api/products/${params.id}`
					),
			},
		],
	},
	// {
	//     path: "*",
	//     element: <NotFoundPage />,
	// },
]);

export default router;
