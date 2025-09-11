import Logo from "@/components/logo"
import UserMenu from "@/components/user-menu"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from "../mood-toggle"
import { Link } from "react-router"
import { useGetMeQuery } from "@/redux/features/user/user.api"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
  { href: "/fqa", label: "FQA" },
]

export default function Navbar() {
  const { data } = useGetMeQuery(undefined)

  return (
    <header className="border-b px-4 md:px-6 ">
      <div className="flex h-20 my-2 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 12L20 12" />
                  <path d="M4 12H20" />
                  <path d="M4 12H20" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full" id="nav-menu-mobile">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <Link to={link.href}>
                        <NavigationMenuLink
                          id={`nav-${link.label.toLowerCase()}`}
                          className="py-1.5 text-xl"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            <NavigationMenu className="max-md:hidden" id="nav-menu">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <Link to={link.href}>
                      <NavigationMenuLink
                        id={`nav-${link.label.toLowerCase()}`}
                        className="text-muted-foreground text-xl hover:text-primary py-1.5 font-medium"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div id="theme-toggle-menu" className="flex items-center gap-2">
            <ModeToggle />
          </div>

          {data?.data?.phoneNumber ? (
            <UserMenu />
          ) : (
            <Link to={`/login`} id="login-btn">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
