"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Briefcase, Users, Star, BarChart2, Settings, HelpCircle } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Role Management",
    href: "/dashboard/roles",
    icon: Briefcase,
  },
  {
    title: "Candidate Pool",
    href: "/dashboard/candidates",
    icon: Users,
  },
  {
    title: "Top Performers",
    href: "/dashboard/top-performers",
    icon: Star,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart2,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/dashboard/support",
    icon: HelpCircle,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:block w-64 bg-muted border-r">
      <ScrollArea className="h-full py-6">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">AI Recruitment</h2>
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </nav>
  )
}

