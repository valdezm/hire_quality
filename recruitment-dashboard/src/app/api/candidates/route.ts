import { NextResponse } from 'next/server'
import { mockCandidates } from '@/data/mockCandidates'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('search')?.toLowerCase() || ''

  const filteredCandidates = query
    ? mockCandidates.filter(
        candidate =>
          candidate.name.toLowerCase().includes(query) ||
          candidate.position.toLowerCase().includes(query)
      )
    : mockCandidates

  return NextResponse.json(filteredCandidates)
}
