"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, User2 } from "lucide-react"

interface CandidateCardProps {
  candidate: {
    id: number
    name: string
    photo: string
    position: string
    aiScore: number
    similarityScore: number
    skills: string[]
  }
  onClick: () => void
}

export function CandidateCard({ candidate, onClick }: CandidateCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      onClick={onClick}
    >
      <Card className="cursor-pointer">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={candidate.photo} alt={candidate.name} />
            <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-sm font-medium">{candidate.name}</CardTitle>
            <p className="text-xs text-muted-foreground">{candidate.position}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-amber-500 mr-1" />
              <span className="text-xs font-medium mr-1">AI Score:</span>
              <Badge variant="secondary">{candidate.aiScore}</Badge>
            </div>
            <div className="flex items-center">
              <User2 className="h-4 w-4 text-blue-500 mr-1" />
              <span className="text-xs font-medium mr-1">Similarity:</span>
              <Badge variant="secondary">{candidate.similarityScore}%</Badge>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {candidate.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))}
            {candidate.skills.length > 3 && <Badge variant="outline">+{candidate.skills.length - 3}</Badge>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

