import AddBalance from "@/pages/Agent/AddBalance";
import AddMoneyToUser from "@/pages/Agent/AddMoneyToUser";
import AgentOverview from "@/pages/Agent/AgentOverview";
import TransactionHistory from "@/pages/Common/TransactionHistory";
import UserProfile from "@/pages/Common/UserProfile";
import type { ISidebarItem } from "@/types/index.type";

export const agentSidebar: ISidebarItem[] = [
    {
        title: "",
        items: [
            {
                title: "Overview",
                url: "/agent/overview",
                component: AgentOverview
            },
            {
                title: "Send Money",
                url: "/agent/add-money-to-user",
                component: AddMoneyToUser
            },
      
            {
                title: "Add Balance",
                url: "/agent/add-balance",
                component: AddBalance
            },
            {
                title: "Transaction History",
                url: "/agent/transaction-history",
                component: TransactionHistory
            },
            {
                title: " Profile",
                url: "/agent/profile",
                component: UserProfile
            },

        ],
    },

]
