
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { RadarChart } from '@/components/shared/RadarChart'

type Candidate = {
  id: string
  name: string
  position: string
  email: string
  phone: string
  skills: string[]
  experience: string
  education: string
  metrics: {
    technicalSkills: number
    communication: number
    teamwork: number
    problemSolving: number
    leadership: number
  }
  avatar: string
}

const mockCandidate: Candidate = {
  id: '1',
  name: 'Alice Johnson',
  position: 'Senior Software Engineer',
  email: 'alice.johnson@example.com',
  phone: '+1 (555) 123-4567',
  skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS'],
  experience: '8 years',
  education: 'M.S. Computer Science, Stanford University',
  metrics: {
    technicalSkills: 90,
    communication: 85,
    teamwork: 88,
    problemSolving: 92,
    leadership: 78
  },
  avatar: '/avatars/alice.jpg'
}

export function CandidateProfile() {
  const candidate = mockCandidate

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={candidate.avatar} alt={candidate.name} />
            <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{candidate.name}</CardTitle>
            <p className="text-gray-500">{candidate.position}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p>Email: {candidate.email}</p>
            <p>Phone: {candidate.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Experience & Education</h3>
            <p>Experience: {candidate.experience}</p>
            <p>Education: {candidate.education}</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map(skill => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Performance Metrics</h3>
          <RadarChart data={candidate.metrics} />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline">View Full Profile</Button>
          <Button>Schedule Interview</Button>
        </div>
      </CardContent>
    </Card>
  )
}