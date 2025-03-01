'use client';

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScoreBadge } from '@/components/shared/ScoreBadge'
import type { Candidate } from '@/data/mockCandidates'

async function fetchCandidates(search: string) {
  const response = await fetch(`/api/candidates${search ? `?search=${search}` : ''}`)
  if (!response.ok) {
    throw new Error('Failed to fetch candidates')
  }
  return response.json() as Promise<Candidate[]>
}

export function CandidateList() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data: candidates = [], isLoading, error } = useQuery({
    queryKey: ['candidates', searchTerm],
    queryFn: () => fetchCandidates(searchTerm),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  })

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
        {isLoading ? (
          <div className="flex justify-center py-4">Loading...</div>
        ) : error ? (
          <div className="text-red-500 py-4">Error loading candidates</div>
        ) : (
          <ul className="space-y-4">
            {candidates.map(candidate => (
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
                  <ScoreBadge label="Match" score={candidate.similarityScore} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}