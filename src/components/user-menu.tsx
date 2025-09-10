import {
  BoltIcon, LogOutIcon
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useGetMeQuery } from "@/redux/features/user/user.api"
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api"
import { useAppDispatch } from "@/redux/hook"
import { toast } from "sonner"
import { Link } from "react-router"
import { role } from "@/constants/Role"


const dashboardLink = [
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/agent", label: "Dashboard", role: role.agent },
  { href: "/user", label: "Dashboard", role: role.user },

]

export default function UserMenu() {
  const { data, isLoading } = useGetMeQuery(undefined)
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const handleLogout = async () => {
    try {
      const res = await logout(undefined)

      console.log(res);
      dispatch(authApi.util.resetApiState())
      toast.success("Logout Successful")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback>{data?.data?.name.split("")[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-muted-foreground truncate text-sm font-medium">
            {data?.data?.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {data?.data?.phoneNumber}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {data?.data?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>

          {
            !isLoading && dashboardLink?.map((link) => (
              <>
                {
                  link?.role === data?.data?.role && (
                    < DropdownMenuItem >
                      <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
                      <Link to={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                  )
                }
              </>
            ))
          }
          {/* < DropdownMenuItem >
            <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
            <Link to={''}>lihki</Link>
          </DropdownMenuItem> */}


        </DropdownMenuGroup>
        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <PinIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 4</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPenIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Option 5</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />


          <span>Logout</span>

        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  )
}
