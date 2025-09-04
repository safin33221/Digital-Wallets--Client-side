import { role } from "@/constants/Role";
import { adminSidebar } from "@/routes/AdminSidebar";
import { agentSidebar } from "@/routes/AgentSidebarItem";
import { UserSidebar } from "@/routes/UserSidebarItem";
import type { TRole } from "@/types/index.type";

export default function getSidebarItem(userRole: TRole) {
    switch (userRole) {
        case role.admin:
            return [...adminSidebar]
        case role.agent:
            return [...agentSidebar]
        case role.user:
            return [...UserSidebar]

        default:
            return [];
    }
}