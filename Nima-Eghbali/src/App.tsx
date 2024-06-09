import React, { type FC } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../Pages/Login"
import Home from "../Pages/Home"
import Register from "../Pages/Register"
import HelpCenter from "../Pages/Helpcenter"
import Policy from "../Pages/Policy"
import Layout from "../components/Layout"
import AuthLayout from "../components/AuthLayout"
import PurchaseLayout from "../components/PurchaseLayout"
import Loggedin from "../Pages/Loggedin"
import Welcome from "../Pages/Welcome"
import Payment from "../Pages/Payment"
import Setting from "../Pages/Setting"
import Notification from "../Pages/Notification"
import Purchase1 from "../Pages/Purchase1"
import Purchase2 from "../Pages/Purchase2"

export const loggedIn = !!parseInt(localStorage.getItem("login") as string)

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [


            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            },
            {
                path: "/auth/loggedin",
                element: <Loggedin />
            }
            ,
            {
                path: "/auth/policy",
                element: <Policy/>
            }
            ,
            {
                path: "/auth/helpcenter",
                element: <HelpCenter/>
            }
            ,
            {
                path: "/auth/payment",
                element: <Payment/>
            }
            ,
            {
                path: "/auth/setting",
                element: <Setting/>
            }
            ,
            {
                path: "/auth/notification",
                element: <Notification/>
            }
        ]
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home/>
            }
            ,
            {
                path: "/welcome",
                element: <Welcome />
            }
        ]
    },
    {
        path: "/item",
        element: <PurchaseLayout />,
        children: [
            {
                path: "/item/purchase1",
                element: <Purchase1/>
            }
            ,{
                path: "/item/purchase2",
                element: <Purchase2/>
            }
        ]
    }
])

const App: React.FC = () => {
    return (<RouterProvider router={router} />)

}
export default App