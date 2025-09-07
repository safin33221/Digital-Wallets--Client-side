import SendMoney from "@/pages/User/SendMony";
import UserOverview from "@/pages/User/UserOverview";
import type { ISidebarItem } from "@/types/index.type";

export const UserSidebar: ISidebarItem[] = [
    {
        title: "",
        items: [
            {
                title: "Overview",
                url: "/user/overview",
                component: UserOverview
            },
            {
                title: "Withdraw money",
                url: "/user/withdraw-money",
                component: UserOverview
            },
            {
                title: "Send money",
                url: "/user/send-money",
                component: SendMoney
            },
            {
                title: "Transaction history ",
                url: "/user/transaction-history",
                component: UserOverview
            },
            {
                title: "Profile  ",
                url: "/user/profile",
                component: UserOverview
            },

        ],
    },

]
