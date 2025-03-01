export interface WorkHistory {
  role: string
  company: string
  period: string
  description: string
}

export interface Candidate {
  id: number
  name: string
  location: string
  email: string
  phone: string
  skills: string[]
  yearsOfExperience: number
  aiScore: number
  similarityScore: number
  strengths: string[]
  areasForGrowth: string[]
  workHistory: WorkHistory[]
} 