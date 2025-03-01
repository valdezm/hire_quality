export type Candidate = {
  id: string
  name: string
  position: string
  aiScore: number
  similarityScore: number
  avatar: string
}

export const mockCandidates: Candidate[] = [
  { id: '1', name: 'Alice Johnson', position: 'Software Engineer', aiScore: 92, similarityScore: 88, avatar: '/avatars/alice.jpg' },
  { id: '2', name: 'Bob Smith', position: 'Product Manager', aiScore: 87, similarityScore: 91, avatar: '/avatars/bob.jpg' },
  { id: '3', name: 'Charlie Brown', position: 'Data Scientist', aiScore: 95, similarityScore: 85, avatar: '/avatars/charlie.jpg' },
]
