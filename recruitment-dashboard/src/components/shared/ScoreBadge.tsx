import { Badge } from '@/components/ui/badge'

type ScoreBadgeProps = {
  label: string
  score: number
}

export function ScoreBadge({ label, score }: ScoreBadgeProps) {
  let color = 'bg-red-100 text-red-800'
  if (score >= 90) {
    color = 'bg-green-100 text-green-800'
  } else if (score >= 70) {
    color = 'bg-yellow-100 text-yellow-800'
  }

  return (
    <Badge variant="outline" className={`${color} font-semibold`}>
      {label}: {score}
    </Badge>
  )
}