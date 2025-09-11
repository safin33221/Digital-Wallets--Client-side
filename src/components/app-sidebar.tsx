import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useGetMeQuery } from "@/redux/features/user/user.api"
import getSidebarItem from "@/utils/getSidebarItem"
import { Link } from "react-router"
import Logo from "./logo"
import { Globe } from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData, isLoading } = useGetMeQuery(undefined)

  const data = {
    navMain: getSidebarItem(userData?.data?.role),
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-col items-start gap-2 border-b p-4">
        <Logo />
        {isLoading ? (
          <div className="w-full animate-pulse space-y-2">
            <div className="h-4 w-24 bg-background rounded"></div>
            <div className="h-3 w-16 bg-background rounded"></div>
            <div className="h-3 w-40 bg-background rounded"></div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <h1 className="font-semibold">{userData?.data?.name}</h1>
              <p className="text-sm text-gray-500">({userData?.data?.role})</p>
            </div>
            <p className="text-xs text-gray-400">{userData?.data?.email}</p>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="p-2">
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="h-10 bg-background rounded-lg"></div>
            ))}
            <div className="my-5 h-[1px] bg-gray-300"></div>
            <div className="h-10 bg-background rounded-lg"></div>
          </div>
        ) : (
          data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {item.items.map((child) => (
                    <SidebarMenuItem key={child.title}>
                      <Link to={child.url}>
                        <SidebarMenuButton className="flex items-center gap-2 text-lg hover:bg-primary/50 border border-primary/30 font-semibold p-3 rounded-xl">
                          {child.icon && <child.icon className="w-6" />}
                          {child.title}
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  ))}

                  <div className="bg-primary/50 my-5 w-full h-[1px]"></div>
                  <SidebarMenuItem className="text-center">
                    <Link to={"/"}>
                      <SidebarMenuButton className="flex items-center justify-center gap-2 text-lg hover:bg-primary/50 border border-primary/30 font-semibold p-3 rounded-xl">
                        <Globe />
                        View Site
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        )}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
