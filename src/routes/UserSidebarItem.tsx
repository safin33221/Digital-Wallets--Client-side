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
                url: "/user/overview",
                component: Overview
            },
            {
                title: "Manage User",
                url: "/user/mange-user",
                component: ManageUser
            },
            {
                title: "Manage Agents",
                url: "/user/mange-agents",
                component: ManageAgents
            },

        ],
    },

]
