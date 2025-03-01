import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

interface TopPerformerSelectionProps {
  roleName: string
  level: string
  onSelect: (performers: string[]) => void
  onBack: () => void
}

// Mock data for top performers
const mockTopPerformers = ["John Doe", "Jane Smith", "Alex Johnson", "Emily Brown", "Michael Lee", "Sarah Davis"]

export function TopPerformerSelection({ roleName, level, onSelect, onBack }: TopPerformerSelectionProps) {
  const [selectedPerformers, setSelectedPerformers] = useState<string[]>([])

  const handleToggle = (performer: string) => {
    setSelectedPerformers((prev) =>
      prev.includes(performer) ? prev.filter((p) => p !== performer) : [...prev, performer],
    )
  }

  const handleSubmit = () => {
    onSelect(selectedPerformers)
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h2 className="text-2xl font-bold">
          Select Top Performers for {level} {roleName}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {mockTopPerformers.map((performer) => (
          <Card key={performer} className="cursor-pointer hover:bg-accent">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Checkbox
                  id={performer}
                  checked={selectedPerformers.includes(performer)}
                  onCheckedChange={() => handleToggle(performer)}
                  className="mr-2"
                />
                {performer}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {level} {roleName}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={handleSubmit} disabled={selectedPerformers.length === 0}>
        Continue with Selected Top Performers
      </Button>
    </div>
  )
}

