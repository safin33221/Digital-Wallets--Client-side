import AddBalance from "@/pages/Agent/AddBalance";
import AddMoneyToUser from "@/pages/Agent/AddMoneyToUser";
import AgentOverview from "@/pages/Agent/AgentOverview";
import TransactionHistory from "@/pages/Common/TransactionHistory";
import UserProfile from "@/pages/Common/UserProfile";
import type { ISidebarItem } from "@/types/index.type";

import {
  LayoutDashboard,
  Send,
  Wallet,
  History,
  User,
} from "lucide-react";

export const agentSidebar: ISidebarItem[] = [
  {
    title: "",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: AgentOverview,
        icon: LayoutDashboard,
      },
      {
        title: "Send Money",
        url: "/agent/add-money-to-user",
        component: AddMoneyToUser,
        icon: Send,
      },
      {
        title: "Add Balance",
        url: "/agent/add-balance",
        component: AddBalance,
        icon: Wallet,
      },
      {
        title: "Transaction History",
        url: "/agent/transaction-history",
        component: TransactionHistory,
        icon: History,
      },
      {
        title: "Profile",
        url: "/agent/profile",
        component: UserProfile,
        icon: User,
      },
    ],
  },
];
