import TransactionHistory from "@/pages/Common/TransactionHistory";
import SendMoney from "@/pages/User/SendMony";
import UserOverview from "@/pages/User/UserOverview";
import UserProfile from "@/pages/Common/UserProfile";
import CashOut from "@/pages/User/CashOut";
import type { ISidebarItem } from "@/types/index.type";

import {
    LayoutDashboard,
    Wallet,
    Send,
    History,
    User,
} from "lucide-react";

export const UserSidebar: ISidebarItem[] = [
    {
        title: "",
        items: [
            {
                title: "Overview",
                url: "/user/overview",
                component: UserOverview,
                icon: LayoutDashboard,
            },
            {
                title: "Cash Out",
                url: "/user/withdraw-money",
                component: CashOut,
                icon: Wallet,
            },
            {
                title: "Send Money",
                url: "/user/send-money",
                component: SendMoney,
                icon: Send,
            },
            {
                title: "Transaction History",
                url: "/user/transaction-history",
                component: TransactionHistory,
                icon: History,
            },
            {
                title: "Profile",
                url: "/user/profile",
                component: UserProfile,
                icon: User,
            },
        ],
    },
];
