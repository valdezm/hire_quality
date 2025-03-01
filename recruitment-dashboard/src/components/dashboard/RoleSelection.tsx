"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RoleCard } from "@/components/dashboard/RoleCard"
import { LevelSelection } from "@/components/dashboard/LevelSelection"
import { TopPerformerSelection } from "@/components/dashboard/TopPerformerSelection"
import { JobDescriptionEditor } from "@/components/dashboard/JobDescriptionEditor"
import { CandidateList } from "@/components/dashboard/CandidateList"

// Mock data for roles
const mockRoles = [
  { id: 1, title: "Software Engineer", department: "Engineering", openPositions: 3, icon: "💻" },
  { id: 2, title: "Product Manager", department: "Product", openPositions: 2, icon: "📊" },
  { id: 3, title: "UX Designer", department: "Design", openPositions: 1, icon: "🎨" },
  { id: 4, title: "Data Scientist", department: "Data", openPositions: 2, icon: "📈" },
  { id: 5, title: "Marketing Specialist", department: "Marketing", openPositions: 1, icon: "📣" },
  { id: 6, title: "Sales Representative", department: "Sales", openPositions: 3, icon: "💼" },
]

export function RoleSelection() {
  const [roles, setRoles] = useState(mockRoles)
  const [filter, setFilter] = useState({ department: "", urgency: "", status: "" })
  const [selectedRole, setSelectedRole] = useState<number | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedTopPerformers, setSelectedTopPerformers] = useState<string[]>([])
  const [jobDescription, setJobDescription] = useState<string>("")
  const [step, setStep] = useState<"roles" | "level" | "topPerformers" | "jobDescription" | "candidates">("roles")

  const handleFilterChange = (key: string, value: string) => {
    setFilter((prev) => ({ ...prev, [key]: value }))
  }

  const filteredRoles = roles.filter((role) => {
    if (filter.department && role.department !== filter.department) return false
    // Add more filter logic here as needed
    return true
  })

  const handleRoleClick = (roleId: number) => {
    setSelectedRole(roleId)
    setStep("level")
  }

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level)
    setStep("topPerformers")
  }

  const handleTopPerformersSelect = (performers: string[]) => {
    setSelectedTopPerformers(performers)
    setStep("jobDescription")
  }

  const handleJobDescriptionSubmit = (description: string) => {
    setJobDescription(description)
    setStep("candidates")
  }

  const handleBack = () => {
    switch (step) {
      case "level":
        setStep("roles")
        setSelectedRole(null)
        break
      case "topPerformers":
        setStep("level")
        setSelectedLevel(null)
        break
      case "jobDescription":
        setStep("topPerformers")
        setSelectedTopPerformers([])
        break
      case "candidates":
        setStep("jobDescription")
        setJobDescription("")
        break
      default:
        break
    }
  }

  return (
    <div>
      {step === "roles" && (
        <>
          <div className="flex flex-wrap gap-4 mb-6">
            <Input
              placeholder="Search roles..."
              className="max-w-sm"
              onChange={(e) => {
                /* Implement search logic */
              }}
            />
            <Select onValueChange={(value) => handleFilterChange("department", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Product">Product</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Data">Data</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleFilterChange("urgency", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Urgency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={(value) => handleFilterChange("status", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
              </SelectContent>
            </Select>
            <Button className="ml-auto">
              <Plus className="mr-2 h-4 w-4" /> Create New Role
            </Button>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredRoles.map((role) => (
              <RoleCard key={role.id} role={role} onClick={() => handleRoleClick(role.id)} />
            ))}
          </motion.div>
        </>
      )}
      {step === "level" && selectedRole && (
        <LevelSelection
          roleName={roles.find((role) => role.id === selectedRole)?.title || ""}
          onSelect={handleLevelSelect}
          onBack={handleBack}
        />
      )}
      {step === "topPerformers" && selectedLevel && (
        <TopPerformerSelection
          roleName={roles.find((role) => role.id === selectedRole)?.title || ""}
          level={selectedLevel}
          onSelect={handleTopPerformersSelect}
          onBack={handleBack}
        />
      )}
      {step === "jobDescription" && (
        <JobDescriptionEditor
          roleName={roles.find((role) => role.id === selectedRole)?.title || ""}
          level={selectedLevel || ""}
          onSubmit={handleJobDescriptionSubmit}
          onBack={handleBack}
        />
      )}
      {step === "candidates" && (
        <CandidateList
          roleName={roles.find((role) => role.id === selectedRole)?.title || ""}
          level={selectedLevel || ""}
          topPerformers={selectedTopPerformers}
          jobDescription={jobDescription}
          onBack={handleBack}
        />
      )}
    </div>
  )
}

