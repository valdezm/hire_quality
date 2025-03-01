import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

interface LevelSelectionProps {
  roleName: string
  onSelect: (level: string) => void
  onBack: () => void
}

const levels = ["New Graduate", "Junior", "Mid-Level", "Senior", "Staff", "Principal"]

export function LevelSelection({ roleName, onSelect, onBack }: LevelSelectionProps) {
  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h2 className="text-2xl font-bold">Select Level for {roleName}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Card key={level} className="cursor-pointer hover:bg-accent" onClick={() => onSelect(level)}>
            <CardHeader>
              <CardTitle>{level}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Select for {level} {roleName}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

