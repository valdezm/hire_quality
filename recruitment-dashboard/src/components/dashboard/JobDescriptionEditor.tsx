"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

interface JobDescriptionEditorProps {
  roleName: string
  level: string
  onSubmit: (description: string) => void
  onBack: () => void
}

// Mock existing job descriptions
const existingDescriptions = {
  "New Graduate Software Engineer":
    "We are seeking a talented and motivated new graduate software engineer to join our dynamic team...",
  "Senior Software Engineer":
    "We are looking for an experienced senior software engineer to lead complex projects and mentor junior developers...",
  "Staff Software Engineer":
    "We are searching for a highly skilled staff software engineer to drive technical initiatives and shape our engineering culture...",
}

export function JobDescriptionEditor({ roleName, level, onSubmit, onBack }: JobDescriptionEditorProps) {
  const [description, setDescription] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value)
    setDescription(existingDescriptions[value as keyof typeof existingDescriptions] || "")
  }

  const handleSubmit = () => {
    onSubmit(description)
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h2 className="text-2xl font-bold">
          Edit Job Description for {level} {roleName}
        </h2>
      </div>
      <div className="mb-4">
        <Select onValueChange={handleTemplateChange}>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Select existing job description" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(existingDescriptions).map((key) => (
              <SelectItem key={key} value={key}>
                {key}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter or edit the job description here..."
        className="min-h-[200px] mb-4"
      />
      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => setDescription("")}>
          Clear
        </Button>
        <Button onClick={handleSubmit} disabled={!description.trim()}>
          Get Top Candidates
        </Button>
      </div>
    </div>
  )
}

