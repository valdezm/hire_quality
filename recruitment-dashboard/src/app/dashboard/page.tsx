import type { Metadata } from "next"
import { RoleSelection } from "@/components/dashboard/RoleSelection"

export const metadata: Metadata = {
  title: "Dashboard | AI Recruitment System",
  description: "Overview of recruitment activities",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Role Selection</h1>
      <RoleSelection />
    </div>
  )
}

