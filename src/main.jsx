import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Outlet,
} from "react-router-dom";

import Login from "./routes/Login";
import Register from "./routes/Register";

import Creator from "./routes/Marketplace/Creator";
import Marketplace from "./routes/Marketplace/Marketplace";
import Payment from "./routes/Marketplace/Payment";
import Product from "./routes/Marketplace/Product";
import Profile from "./routes/Marketplace/Profile";
import Checkout from "./routes/Marketplace/Checkout";
import Cart from "./routes/Marketplace/Cart";
import Failure from "./routes/Marketplace/Failure";

import Products from "./routes/Creator/Products";
import Sales from "./routes/Creator/Sales";
import Wallet from "./routes/Creator/Wallet";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/login", element: <Login /> },
	{ path: "/register", element: <Register /> },
	{ path: "/marketplace", element: <Marketplace /> },
	{ path: "/payment", element: <Payment /> },
	{ path: "/failure", element: <Failure /> },
	{ path: "/marketplace/product", element: <Product /> },
	{ path: "/marketplace/profile", element: <Profile /> },
	{ path: "/marketplace/checkout", element: <Checkout /> },
	{ path: "/marketplace/cart", element: <Cart /> },
	{ path: "/creator/id", element: <Creator /> },

	//Rotas para criadores (vendedores)
	{ path: "/creator/products", element: <Products /> },
	{ path: "/creator/sales", element: <Sales /> },
	{ path: "/creator/wallet", element: <Wallet /> },
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
