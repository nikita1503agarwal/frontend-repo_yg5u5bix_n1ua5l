import { useEffect, useRef } from 'react'

// Extremely subtle, GPU-optimized background: gradient + canvas lines + tiny particles
export default function BackgroundFX({ disable = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (disable) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d', { alpha: true })
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    // lightweight particles and circuit lines
    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      r: Math.random() * 1.2 + 0.3,
      a: 0.08 + Math.random() * 0.25,
    }))

    let raf
    const render = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.globalAlpha = 0.6
      // soft cloud aura
      const g1 = ctx.createRadialGradient(width*0.2, height*0.2, 0, width*0.2, height*0.2, width*0.6)
      g1.addColorStop(0, 'rgba(168,85,247,0.06)')
      g1.addColorStop(1, 'rgba(168,85,247,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0,0,width,height)

      const g2 = ctx.createRadialGradient(width*0.8, height*0.7, 0, width*0.8, height*0.7, width*0.7)
      g2.addColorStop(0, 'rgba(14,165,233,0.06)')
      g2.addColorStop(1, 'rgba(14,165,233,0)')
      ctx.fillStyle = g2
      ctx.fillRect(0,0,width,height)
      ctx.restore()

      // circuit lines
      ctx.strokeStyle = 'rgba(226,232,240,0.06)'
      ctx.lineWidth = 1
      for (let i = 0; i < 8; i++) {
        const y = (i + 1) * (height / 10)
        ctx.beginPath()
        ctx.moveTo(0, y)
        for (let x = 0; x < width; x += 80) {
          const ny = y + Math.sin((x + performance.now()*0.0008 + i*10) * 0.08) * 6
          ctx.lineTo(x, ny)
        }
        ctx.stroke()
      }

      // particles
      ctx.fillStyle = 'rgba(226,232,240,0.45)'
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.globalAlpha = p.a
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fill()
      })

      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [disable])

  if (disable) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* global gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0F172A_0%,#1E2A4A_100%)]" />
      {/* holographic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(79,70,229,0.12),transparent),radial-gradient(900px_500px_at_90%_80%,rgba(14,165,233,0.12),transparent)] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
