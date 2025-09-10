import AdminProfile from "@/pages/Admin/AdminProfile";
import AllTransaction from "@/pages/Admin/AllTransaction";
import ManageAgents from "@/pages/Admin/ManageAgents";
import ManageUser from "@/pages/Admin/ManageUser";
import Overview from "@/pages/Admin/Overview";
import type { ISidebarItem } from "@/types/index.type";

// Import lucide-react icons
import {
    LayoutDashboard,
    Users,
    UserCog,
    CreditCard,
    UserCircle,
} from "lucide-react";

export const adminSidebar: ISidebarItem[] = [
    {
        title: "",
        items: [
            {
                title: "Overview",
                url: "/admin/overview",
                component: Overview,
                icon: LayoutDashboard,
            },
            {
                title: "Manage User",
                url: "/admin/mange-user",
                component: ManageUser,
                icon: Users,
            },
            {
                title: "Manage Agents",
                url: "/admin/mange-agents",
                component: ManageAgents,
                icon: UserCog,
            },
            {
                title: "All Transaction",
                url: "/admin/all-transaction",
                component: AllTransaction,
                icon: CreditCard,
            },
            {
                title: "Profile",
                url: "/admin/profile",
                component: AdminProfile,
                icon: UserCircle,
            },
        ],
    },
];
