"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function NetworkMolecule() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class
    class Node {
      x: number
      y: number
      radius: number
      color: string
      glowIntensity: number
      glowDirection: number
      connections: Node[]
      vx: number
      vy: number
      originalX: number
      originalY: number

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.radius = radius
        this.color = color
        this.glowIntensity = Math.random() * 0.5 + 0.5
        this.glowDirection = Math.random() > 0.5 ? 1 : -1
        this.connections = []
        // Add velocity properties for movement
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
      }

      draw() {
        if (!ctx) return

        // Draw glow
        const gradient = ctx.createRadialGradient(this.x, this.y, this.radius * 0.5, this.x, this.y, this.radius * 3)
        gradient.addColorStop(0, `${this.color}`)
        gradient.addColorStop(0.5, `${this.color}${Math.floor(this.glowIntensity * 40).toString(16)}`)
        gradient.addColorStop(1, `${this.color}00`)

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Draw node
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      update() {
        // Pulse the glow
        this.glowIntensity += 0.01 * this.glowDirection
        if (this.glowIntensity > 1 || this.glowIntensity < 0.5) {
          this.glowDirection *= -1
        }

        // Move the node
        this.x += this.vx
        this.y += this.vy

        // Boundary checking with soft return to original position
        const distanceFromOrigin = Math.sqrt(
          Math.pow(this.x - this.originalX, 2) + Math.pow(this.y - this.originalY, 2),
        )

        if (distanceFromOrigin > 50) {
          // Apply a force back toward the original position
          const dx = this.originalX - this.x
          const dy = this.originalY - this.y
          this.vx += dx * 0.001
          this.vy += dy * 0.001
        }

        // Add some randomness to movement
        this.vx += (Math.random() - 0.5) * 0.05
        this.vy += (Math.random() - 0.5) * 0.05

        // Dampen velocity to prevent excessive speed
        this.vx *= 0.99
        this.vy *= 0.99
      }

      connect(node: Node) {
        if (!this.connections.includes(node)) {
          this.connections.push(node)
        }
      }

      drawConnections() {
        if (!ctx) return

        this.connections.forEach((node) => {
          const gradient = ctx.createLinearGradient(this.x, this.y, node.x, node.y)
          gradient.addColorStop(0, `${this.color}${Math.floor(this.glowIntensity * 80).toString(16)}`)
          gradient.addColorStop(1, `${node.color}${Math.floor(node.glowIntensity * 80).toString(16)}`)

          ctx.beginPath()
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.5
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        })
      }
    }

    // Update the node creation to add more variety
    // Create nodes
    const nodeCount = 15 // Increased from 12
    const nodes: Node[] = []
    const colors = ["#0ea5e9", "#14b8a6", "#3b82f6", "#0d9488"]

    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 4 + 3 // Slightly smaller range

      // Create clusters by adding some nodes closer together
      let x, y
      if (i < nodeCount / 3) {
        // Cluster 1
        x = Math.random() * (canvas.width * 0.3) + canvas.width * 0.1
        y = Math.random() * (canvas.height * 0.3) + canvas.height * 0.1
      } else if (i < (nodeCount * 2) / 3) {
        // Cluster 2
        x = Math.random() * (canvas.width * 0.3) + canvas.width * 0.6
        y = Math.random() * (canvas.height * 0.3) + canvas.height * 0.1
      } else {
        // Cluster 3
        x = Math.random() * (canvas.width * 0.5) + canvas.width * 0.25
        y = Math.random() * (canvas.height * 0.3) + canvas.height * 0.6
      }

      const color = colors[Math.floor(Math.random() * colors.length)]
      nodes.push(new Node(x, y, radius, color))
    }

    // Create connections
    nodes.forEach((node) => {
      // Connect to 2-4 other nodes
      const connectionCount = Math.floor(Math.random() * 3) + 2

      for (let i = 0; i < connectionCount; i++) {
        const targetIndex = Math.floor(Math.random() * nodes.length)
        if (nodes[targetIndex] !== node) {
          node.connect(nodes[targetIndex])
        }
      }
    })

    // Animation loop
    let animationFrame: number

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (so they appear behind nodes)
      nodes.forEach((node) => {
        node.drawConnections()
      })

      // Draw and update nodes
      nodes.forEach((node) => {
        node.draw()
        node.update()
      })

      // Occasionally create new connections (every ~5 seconds)
      if (Math.random() < 0.005) {
        const sourceIndex = Math.floor(Math.random() * nodes.length)
        const targetIndex = Math.floor(Math.random() * nodes.length)

        if (
          sourceIndex !== targetIndex &&
          !nodes[sourceIndex].connections.includes(nodes[targetIndex]) &&
          nodes[sourceIndex].connections.length < 5
        ) {
          nodes[sourceIndex].connect(nodes[targetIndex])
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
}

export function GlowingNetworkMolecule() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <NetworkMolecule />
      </motion.div>
    </div>
  )
}
