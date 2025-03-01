"use client"

import { useTheme } from "next-themes"

interface RadarChartProps {
  metrics: Record<string, number>
}

export function RadarChart({ metrics }: RadarChartProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const size = 250
  const centerX = size / 2
  const centerY = size / 2
  const radius = size * 0.4

  const categories = ["culturalFit", "technicalExpertise", "teamwork", "problemSolving", "reliability"]

  const categoryLabels = {
    culturalFit: "Cultural Fit",
    technicalExpertise: "Technical Expertise",
    teamwork: "Teamwork",
    problemSolving: "Problem Solving",
    reliability: "Reliability",
  }

  const angleStep = (Math.PI * 2) / categories.length

  // Calculate points for each metric
  const points = categories.map((category, i) => {
    const value = metrics[category] / 100 // Normalize to 0-1
    const angle = i * angleStep - Math.PI / 2 // Start from top
    const x = centerX + radius * value * Math.cos(angle)
    const y = centerY + radius * value * Math.sin(angle)
    return { x, y, category, value: metrics[category] }
  })

  // Create path for the radar shape
  const pathData = points.map((point, i) => (i === 0 ? "M" : "L") + point.x + "," + point.y).join(" ") + "Z"

  return (
    <div className="w-full flex justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={radius * scale}
            fill="none"
            stroke={isDarkMode ? "#374151" : "#e2e8f0"}
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {categories.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke={isDarkMode ? "#374151" : "#e2e8f0"}
              strokeWidth="1"
            />
          )
        })}

        {/* Data polygon */}
        <path
          d={pathData}
          fill={isDarkMode ? "rgba(56, 189, 248, 0.2)" : "rgba(56, 189, 248, 0.2)"}
          stroke={isDarkMode ? "rgb(56, 189, 248)" : "rgb(56, 189, 248)"}
          strokeWidth="2"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill={isDarkMode ? "#1f2937" : "white"}
            stroke={isDarkMode ? "rgb(56, 189, 248)" : "rgb(56, 189, 248)"}
            strokeWidth="2"
          />
        ))}

        {/* Labels */}
        {categories.map((category, i) => {
          const angle = i * angleStep - Math.PI / 2
          const labelRadius = radius * 1.15
          const x = centerX + labelRadius * Math.cos(angle)
          const y = centerY + labelRadius * Math.sin(angle)

          // Adjust text anchor based on position
          let textAnchor = "middle"
          if (angle > -Math.PI / 4 && angle < Math.PI / 4) textAnchor = "start"
          else if (angle > (Math.PI * 3) / 4 || angle < (-Math.PI * 3) / 4) textAnchor = "end"

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              fontSize="12"
              fontWeight="500"
              fill={isDarkMode ? "#9ca3af" : "#64748b"}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </text>
          )
        })}

        {/* Score labels */}
        {points.map((point, i) => {
          const angle = i * angleStep - Math.PI / 2
          const scoreRadius = (point.value / 100) * radius * 0.85
          const x = centerX + scoreRadius * Math.cos(angle)
          const y = centerY + scoreRadius * Math.sin(angle)

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontWeight="bold"
              fill={isDarkMode ? "#60a5fa" : "#0284c7"}
            >
              {point.value}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

