"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RoleCardProps {
  role: {
    id: number
    title: string
    department: string
    openPositions: number
    icon: string
  }
  onClick: () => void
}

export function RoleCard({ role, onClick }: RoleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="cursor-pointer hover:bg-accent" onClick={onClick}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{role.title}</CardTitle>
          <div className="text-4xl">{role.icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{role.openPositions}</div>
          <p className="text-xs text-muted-foreground">Open positions in {role.department}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

