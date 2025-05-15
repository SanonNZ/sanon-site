import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ComponentPreviewProps {
  title: string
  description: string
  preview: ReactNode
}

export default function ComponentPreview({ title, description, preview }: ComponentPreviewProps) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <CardContent className="p-0">
        <div className="bg-background/50 p-6">{preview}</div>
      </CardContent>
    </Card>
  )
}
