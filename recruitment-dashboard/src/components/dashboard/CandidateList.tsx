"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CandidateCard } from "@/components/dashboard/CandidateCard"
import { CandidateProfile } from "@/components/dashboard/CandidateProfile"
import { candidates } from "@/data/mockCandidates"

interface CandidateListProps {
  roleName: string
  level: string
  topPerformers: string[]
  jobDescription: string
  onBack: () => void
}

export function CandidateList({ roleName, level, topPerformers, jobDescription, onBack }: CandidateListProps) {
  const [filter, setFilter] = useState({ search: "", sortBy: "score" })
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null)

  const handleFilterChange = (key: string, value: string) => {
    setFilter((prev) => ({ ...prev, [key]: value }))
  }

  const filteredCandidates = candidates
    .filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(filter.search.toLowerCase()) ||
        candidate.skills.some((skill) => skill.toLowerCase().includes(filter.search.toLowerCase())),
    )
    .sort((a, b) => {
      if (filter.sortBy === "score") {
        return b.aiScore - a.aiScore
      } else if (filter.sortBy === "similarity") {
        return b.similarityScore - a.similarityScore
      }
      return 0
    })

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h2 className="text-2xl font-bold">
          Top Candidates for {level} {roleName}
        </h2>
      </div>
      {selectedCandidate === null ? (
        <>
          <div className="flex flex-wrap gap-4 mb-6">
            <Input
              placeholder="Search candidates..."
              className="max-w-sm"
              value={filter.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
            <Select value={filter.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">AI Score</SelectItem>
                <SelectItem value="similarity">Similarity Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onClick={() => setSelectedCandidate(candidate.id)}
              />
            ))}
          </motion.div>
        </>
      ) : (
        <CandidateProfile
          candidate={candidates.find((c) => c.id === selectedCandidate)!}
          roleName={roleName}
          level={level}
          jobDescription={jobDescription}
          onBack={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  )
}

