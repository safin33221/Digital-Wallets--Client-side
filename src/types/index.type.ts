import type { ComponentType } from "react";

export interface ISidebarItem {

    title: string,
    items: {
        title: string,
        url: string,
        component: ComponentType
    }[]
}
export type TRole = "ADMIN" | "USER" | "AGENT"