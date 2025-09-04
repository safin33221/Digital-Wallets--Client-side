import type { ISidebarItem } from "@/types/index.type";


export const generateRoute = (sidebarItem: ISidebarItem[]) => {
    return sidebarItem.flatMap((section) => section.items.map((route) => ({
        path: route.url,
        Component: route.component
    })))
}