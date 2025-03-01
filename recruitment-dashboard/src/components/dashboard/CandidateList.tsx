import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScoreBadge } from '@/components/shared/ScoreBadge'

type Candidate = {
  id: string
  name: string
  position: string
  aiScore: number
  similarityScore: number
  avatar: string
}

const mockCandidates: Candidate[] = [
  { id: '1', name: 'Alice Johnson', position: 'Software Engineer', aiScore: 92, similarityScore: 88, avatar: '/avatars/alice.jpg' },
  { id: '2', name: 'Bob Smith', position: 'Product Manager', aiScore: 87, similarityScore: 91, avatar: '/avatars/bob.jpg' },
  { id: '3', name: 'Charlie Brown', position: 'Data Scientist', aiScore: 95, similarityScore: 85, avatar: '/avatars/charlie.jpg' },
]

export function CandidateList() {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.position.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Candidates</CardTitle>
        <Input
          placeholder="Search candidates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {filteredCandidates.map(candidate => (
            <li key={candidate.id} className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-md">
              <Avatar>
                <AvatarImage src={candidate.avatar} alt={candidate.name} />
                <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{candidate.name}</h3>
                <p className="text-sm text-gray-500">{candidate.position}</p>
              </div>
              <div className="flex space-x-2">
                <ScoreBadge label="AI" score={candidate.aiScore} />
                <ScoreBadge label="Similarity" score={candidate.similarityScore} />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}