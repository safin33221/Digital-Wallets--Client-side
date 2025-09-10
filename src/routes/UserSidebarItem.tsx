import TransactionHistory from "@/pages/Common/TransactionHistory";
import SendMoney from "@/pages/User/SendMony";
import UserOverview from "@/pages/User/UserOverview";
import UserProfile from "@/pages/Common/UserProfile";
import type { ISidebarItem } from "@/types/index.type";
import CashOut from "@/pages/User/CashOut";

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
                title: "Cash Out",
                url: "/user/withdraw-money",
                component: CashOut
            },
            {
                title: "Send money",
                url: "/user/send-money",
                component: SendMoney
            },
            {
                title: "Transaction history ",
                url: "/user/transaction-history",
                component: TransactionHistory
            },
            {
                title: "Profile  ",
                url: "/user/profile",
                component: UserProfile
            },

        ],
    },

]
