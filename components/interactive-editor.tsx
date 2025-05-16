"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Move, Type, Square, Circle, ImageIcon } from "lucide-react"

export default function InteractiveEditor() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-[400px]">
      <div className="border-r p-4 space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Elements</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full flex flex-col gap-1 items-center justify-center"
              onClick={() => setSelectedElement("button")}
            >
              <Square className="h-4 w-4" />
              <span className="text-xs">Button</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full flex flex-col gap-1 items-center justify-center"
              onClick={() => setSelectedElement("text")}
            >
              <Type className="h-4 w-4" />
              <span className="text-xs">Text</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full flex flex-col gap-1 items-center justify-center"
              onClick={() => setSelectedElement("input")}
            >
              <Square className="h-4 w-4" />
              <span className="text-xs">Input</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full flex flex-col gap-1 items-center justify-center"
              onClick={() => setSelectedElement("card")}
            >
              <Square className="h-4 w-4" />
              <span className="text-xs">Card</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full flex flex-col gap-1 items-center justify-center"
              onClick={() => setSelectedElement("image")}
            >
              <ImageIcon className="h-4 w-4" />
              <span className="text-xs">Image</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full flex flex-col gap-1 items-center justify-center"
              onClick={() => setSelectedElement("switch")}
            >
              <Circle className="h-4 w-4" />
              <span className="text-xs">Switch</span>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Properties</h3>
          {selectedElement ? (
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="element-name" className="text-xs">
                  Name
                </Label>
                <Input id="element-name" placeholder="Element name" className="h-8 text-xs" />
              </div>

              {selectedElement === "button" && (
                <>
                  <div className="space-y-1">
                    <Label htmlFor="button-text" className="text-xs">
                      Text
                    </Label>
                    <Input id="button-text" defaultValue="Button" className="h-8 text-xs" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="button-variant" className="text-xs">
                      Variant
                    </Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="button-variant" className="h-8 text-xs">
                        <SelectValue placeholder="Select variant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                        <SelectItem value="ghost">Ghost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {selectedElement === "text" && (
                <>
                  <div className="space-y-1">
                    <Label htmlFor="text-content" className="text-xs">
                      Content
                    </Label>
                    <Input id="text-content" defaultValue="Text content" className="h-8 text-xs" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="text-size" className="text-xs">
                      Size
                    </Label>
                    <Select defaultValue="md">
                      <SelectTrigger id="text-size" className="h-8 text-xs">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xs">Extra Small</SelectItem>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="md">Medium</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                        <SelectItem value="xl">Extra Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {selectedElement === "input" && (
                <>
                  <div className="space-y-1">
                    <Label htmlFor="input-placeholder" className="text-xs">
                      Placeholder
                    </Label>
                    <Input id="input-placeholder" defaultValue="Enter text..." className="h-8 text-xs" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="input-type" className="text-xs">
                      Type
                    </Label>
                    <Select defaultValue="text">
                      <SelectTrigger id="input-type" className="h-8 text-xs">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="password">Password</SelectItem>
                        <SelectItem value="number">Number</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <div className="space-y-1">
                <Label className="text-xs">Position</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="position-x" className="text-xs">
                      X
                    </Label>
                    <Input id="position-x" defaultValue="0" className="h-8 text-xs" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="position-y" className="text-xs">
                      Y
                    </Label>
                    <Input id="position-y" defaultValue="0" className="h-8 text-xs" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs">Size</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="size-width" className="text-xs">
                      Width
                    </Label>
                    <Input id="size-width" defaultValue="auto" className="h-8 text-xs" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="size-height" className="text-xs">
                      Height
                    </Label>
                    <Input id="size-height" defaultValue="auto" className="h-8 text-xs" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-muted-foreground p-2 text-center">
              Select an element to edit its properties
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="border rounded-md h-full flex items-center justify-center bg-background/50 relative">
          {selectedElement ? (
            <div className="relative border-2 border-dashed border-primary p-4 rounded-md">
              {selectedElement === "button" && <Button>Button</Button>}
              {selectedElement === "text" && <p>Text content</p>}
              {selectedElement === "input" && <Input placeholder="Enter text..." />}
              {selectedElement === "card" && (
                <Card className="w-[300px]">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Card Title</h3>
                    <p className="text-sm text-muted-foreground">Card content goes here.</p>
                  </CardContent>
                </Card>
              )}
              {selectedElement === "image" && (
                <div className="w-[200px] h-[150px] bg-muted flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
              {selectedElement === "switch" && <Switch />}
              <div className="absolute -top-3 -left-3 h-6 w-6 bg-primary rounded-full flex items-center justify-center cursor-move">
                <Move className="h-3 w-3 text-primary-foreground" />
              </div>
            </div>
          ) : (
            <div className="text-center space-y-2 max-w-md p-6">
              <h3 className="font-medium">Design Canvas</h3>
              <p className="text-sm text-muted-foreground">
                Select elements from the sidebar and drag them onto the canvas to start building your interactive
                component.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
