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

// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useGetMeQuery(undefined)
  const data = {

    navMain: getSidebarItem(userData?.data?.role)
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex items-center border-b">
        <Logo />
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Link to={item.url}>
                      <SidebarMenuButton className="flex items-center gap-2 text-lg hover:bg-primary/50 border border-primary/30 font-semibold p-3 rounded-xl"  >
                        {item.icon && <item.icon className="w-6" />}
                        {item.title}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
                <div className="bg-primary/50 my-5 w-full h-[1px]"></div>
                <SidebarMenuItem className=" text-center " key={item.title}>
                  <Link to={'/'}>
                    <SidebarMenuButton className="flex items-center text-center gap-2 text-lg hover:bg-primary/50 border border-primary/30 font-semibold p-3 rounded-xl"  >
                      <Globe />
                      View Site
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>

            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
