import ManageAgents from "@/pages/Admin/ManageAgents";
import ManageUser from "@/pages/Admin/ManageUser";
import Overview from "@/pages/Admin/Overview";
import type { ISidebarItem } from "@/types/index.type";

export const agentSidebar: ISidebarItem[] = [
    {
        title: "",
        items: [
            {
                title: "Overview",
                url: "/agent/overview",
                component: Overview
            },
            {
                title: "Manage User",
                url: "/agent/mange-user",
                component: ManageUser
            },
            {
                title: "Manage Agents",
                url: "/agent/mange-agents",
                component: ManageAgents
            },

        ],
    },

]
