import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type AIAnalysis = {
  overallScore: number
  strengths: string[]
  areasForImprovement: string[]
  keyInsights: string[]
}

const mockAnalysis: AIAnalysis = {
  overallScore: 88,
  strengths: [
    'Strong technical skills in React and Node.js',
    'Excellent problem-solving abilities',
    'Good team collaboration'
  ],
  areasForImprovement: [
    'Could improve leadership skills',
    'Enhance communication with non-technical stakeholders'
  ],
  keyInsights: [
    'High potential for senior developer role',
    'Well-suited for projects requiring strong analytical skills',
    'May benefit from mentorship opportunities'
  ]
}

export function AIAnalysis() {
  const analysis = mockAnalysis

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Overall Score</h3>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-blue-600">{analysis.overallScore}</div>
            <div className="ml-2 text-gray-500">/100</div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Strengths</h3>
          <ul className="list-disc list-inside">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="text-green-600">{strength}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Areas for Improvement</h3>
          <ul className="list-disc list-inside">
            {analysis.areasForImprovement.map((area, index) => (
              <li key={index} className="text-amber-600">{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Key Insights</h3>
          <div className="space-y-2">
            {analysis.keyInsights.map((insight, index) => (
              <Badge key={index} variant="outline" className="block">{insight}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}