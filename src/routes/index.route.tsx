import App from "@/App";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Home,
                index: true
            },
            {
                Component: About,
                path: "about"
            },
            {
                Component: Features,
                path: "features"
            },
            {
                Component: Contact,
                path: "contact"
            },
            {
                Component: FAQ,
                path: "fqa"
            },
        ]
    },

    {
        Component: DashboardLayout,
        path: "/dashboard"
    },
    {
        Component: Login,
        path: "/login"
    },
    {
        Component: Register,
        path: "/register"
    },
])