import App from "@/App";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { role } from "@/constants/Role";
import About from "@/pages/About";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import type { TRole } from "@/types/index.type";
import { generateRoute } from "@/utils/generateRoute";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebar } from "./AdminSidebar";
import { agentSidebar } from "./AgentSidebarItem";
import { UserSidebar } from "./UserSidebarItem";

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
        Component: withAuth(DashboardLayout, role.admin as TRole),
        path: "/admin",
        children: [
            {
                index: true,
                element: <Navigate to={`/admin/overview`} />,
            },
            ...generateRoute(adminSidebar)
        ]
    },
    {
        Component: withAuth(DashboardLayout, role.agent as TRole),
        path: "/agent",
        children: [
            {
                index: true,
                element: <Navigate to={`/agent/overview`} />,
            },
            ...generateRoute(agentSidebar)
        ]
    },
    {
        Component: withAuth(DashboardLayout, role.user as TRole),
        path: "/user",
        children: [
            {
                index: true,
                element: <Navigate to={`/user/overview`} />,
            },
            ...generateRoute(UserSidebar)
        ]
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