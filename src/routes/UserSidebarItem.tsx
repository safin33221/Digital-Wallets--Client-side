import ManageAgents from "@/pages/Admin/ManageAgents";
import ManageUser from "@/pages/Admin/ManageUser";
import Overview from "@/pages/Admin/Overview";
import type { ISidebarItem } from "@/types/index.type";

export const UserSidebar: ISidebarItem[] = [
    {
        title: "Getting Started",
        items: [
            {
                title: "Overview",
                url: "/admin/overview",
                component: Overview
            },
            {
                title: "Manage User",
                url: "/admin/mange-user",
                component: ManageUser
            },
            {
                title: "Manage Agents",
                url: "/admin/mange-agents",
                component: ManageAgents
            },

        ],
    },

]
