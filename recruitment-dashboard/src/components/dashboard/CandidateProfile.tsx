"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bot, CheckCircle, AlertCircle, XCircle } from "lucide-react"
import { RadarChart } from "@/components/dashboard/RadarChart"
import { ScoreBadge } from "@/components/dashboard/ScoreBadge"
import { Input } from "@/components/ui/input"

interface CandidateProfileProps {
  candidate: {
    id: number
    name: string
    photo: string
    position: string
    aiScore: number
    similarityScore: number
    location: string
    experience: string
    education: string
    skills: string[]
    metrics: {
      culturalFit: number
      technicalExpertise: number
      teamwork: number
      problemSolving: number
      reliability: number
    }
    topPerformers: { name: string; similarity: number }[]
    strengths: string[]
    growthAreas: string[]
    resume: string
    aiAnalysis: string
    reasoningSteps: {
      action: string
      reasoning: string
      tool?: string
    }[]
    verifications: {
      claim: string
      details: string
      source: string
      status: "verified" | "partially" | "unverified"
    }[]
  }
  roleName: string
  level: string
  jobDescription: string
  onBack: () => void
}

export function CandidateProfile({ candidate, roleName, level, jobDescription, onBack }: CandidateProfileProps) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  
  const handleAskAgent = () => {
    // In a real implementation, this would call your backend
    setResponse("Based on my analysis of the candidate's experience and skills, they would be a strong fit for this role. Their problem-solving approach aligns with our top performers.");
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Candidates
        </Button>
        <h2 className="text-2xl font-bold">Candidate Profile</h2>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <Avatar className="h-20 w-20 mr-4">
            <AvatarImage src={candidate.photo} alt={candidate.name} />
            <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{candidate.name}</CardTitle>
            <p className="text-lg text-muted-foreground">{candidate.position}</p>
            <p className="text-sm text-muted-foreground">{candidate.location}</p>
          </div>
          <div className="ml-auto space-y-2">
            <div className="flex items-center justify-end">
              <span className="mr-2 font-medium">AI Score:</span>
              <ScoreBadge score={candidate.aiScore} />
            </div>
            <div className="flex items-center justify-end">
              <span className="mr-2 font-medium">Similarity:</span>
              <ScoreBadge score={candidate.similarityScore} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-semibold">Experience:</p>
              <p>{candidate.experience}</p>
            </div>
            <div>
              <p className="font-semibold">Education:</p>
              <p>{candidate.education}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <RadarChart metrics={candidate.metrics} />
            <div className="mt-4 text-sm text-muted-foreground">
              <p>*Based on pattern matching with similar top performers</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Similar Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {candidate.topPerformers.map((performer, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                  <span>{performer.name}</span>
                  <Badge variant="outline">{performer.similarity}% similar</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="mr-2 h-5 w-5" />
            AI Agent Analysis Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {candidate.reasoningSteps?.map((step, index) => (
              <div key={index} className="relative pl-8 pb-4">
                {index < candidate.reasoningSteps.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="absolute left-0 top-1 rounded-full bg-blue-200 p-1">
                  <span className="block h-4 w-4 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <div className="rounded-lg border p-3">
                  <p className="font-medium">{step.action}</p>
                  <p className="text-sm text-muted-foreground mt-1">{step.reasoning}</p>
                  {step.tool && (
                    <Badge variant="outline" className="mt-2">
                      Tool: {step.tool}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {candidate.verifications?.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                {item.status === "verified" && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                {item.status === "partially" && <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />}
                {item.status === "unverified" && <XCircle className="h-5 w-5 text-red-500 mt-0.5" />}
                <div>
                  <p className="font-medium">{item.claim}</p>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                  <Badge variant="outline" className="text-xs mt-1">{item.source}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ask the AI Agent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input 
              placeholder="Ask a question about this candidate..." 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button onClick={handleAskAgent}>Ask</Button>
          </div>
          {response && (
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm">{response}</p>
            </div>
          )}
          <div className="mt-4">
            <p className="text-xs text-muted-foreground">Suggested questions:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge 
                variant="outline" 
                className="cursor-pointer" 
                onClick={() => setQuestion("What are this candidate's key strengths?")}
              >
                Key strengths?
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer" 
                onClick={() => setQuestion("How does this candidate compare to our top performers?")}
              >
                Performance comparison?
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer" 
                onClick={() => setQuestion("What interview questions would you recommend?")}
              >
                Recommended questions?
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              {candidate.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              {candidate.growthAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm whitespace-pre-wrap">{candidate.aiAnalysis}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm whitespace-pre-wrap">{candidate.resume}</p>
        </CardContent>
      </Card>
    </div>
  )
}