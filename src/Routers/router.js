import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../Layouts/Layout";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import MyCartPage from "../pages/MyCartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthRoute from "./AuthRoute/AuthRoute";
import {AuthRouteLoader, SignInLoader} from "../utils/loaders";
import Wishlist from "../pages/Wishlist";
import UserProfileLayout from "../pages/UserProfileLayout";
import PersonalInfoPage from "../pages/PersonalInfoPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import AddressesPage from "../pages/AddressesPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <AuthRoute />,
                loader: AuthRouteLoader,
                children: [
                    {
                        path: "/my-cart",
                        element: <MyCartPage />,
                    },
                    {
                        path: "/checkout",
                        element: <CheckoutPage />,
                    },
                    {
                        path: "/user-profile",
                        element: <UserProfileLayout />,
                        children: [
                            {
                                path: "info",
                                element: <PersonalInfoPage />,
                            },
                            {
                                path: "orders",
                                element: <MyOrdersPage />,
                            },
                            {
                                path: "addresses",
                                element: <AddressesPage />,
                            },
                            {
                                path: "orders/:id",
                                element: <OrderDetailsPage />,
                            },
                        ],
                    },

                    {
                        path: "/my-wishlist",
                        element: <Wishlist />,
                    },
                ]
            },
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/products/:id",
                element: <ProductPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/sign-in",
                loader: SignInLoader,
                element: <SignInPage />,
            },
            {
                path: "/sign-up",
                element: <SignUpPage />,
            },
            {
                path: "/*",
                element: <NotFoundPage />,
            },
            {
                path:"/products/itemCardTwo",
                element:<ProductsPage/>,
            },
            {
                path:"/products/itemCardOne",
                element:<ProductsPage/>,
            }

        ]
    }

]);
