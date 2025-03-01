interface ScoreBadgeProps {
  score: number
}

export function ScoreBadge({ score }: ScoreBadgeProps) {
  let color = "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"
  if (score >= 90) {
    color = "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300"
  } else if (score >= 75) {
    color = "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>{score}</span>
  )
}

