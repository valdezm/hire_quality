import type { Metadata } from "next"
import { CandidateList } from "@/components/dashboard/CandidateList"
import { CandidateProfile } from "@/components/dashboard/CandidateProfile"
import { AIAnalysis } from "@/components/dashboard/AIAnalysis"

export const metadata: Metadata = {
  title: "Dashboard | AI Recruitment System",
  description: "Overview of candidates and AI-powered insights",
}

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <CandidateList />
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CandidateProfile />
            <AIAnalysis />
          </div>
        </div>
      </div>
    </div>
  )
}

