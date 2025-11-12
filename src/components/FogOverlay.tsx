import { motion } from 'framer-motion'

const layers = [
  { duration: 55, opacity: 0.12, blur: 70, hue: 'rgba(255,255,255,0.1)' },
  { duration: 70, opacity: 0.1, blur: 90, hue: 'rgba(34,211,238,0.12)' },
  { duration: 85, opacity: 0.09, blur: 85, hue: 'rgba(244,63,94,0.1)' },
]

export function FogOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-8 overflow-hidden">
      {layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute h-[160%] w-[160%]"
          style={{
            top: '-30%',
            left: '-30%',
            background: `radial-gradient(circle at 30% 50%, ${layer.hue}, transparent 60%)`,
            filter: `blur(${layer.blur}px)`,
            opacity: layer.opacity,
            mixBlendMode: 'screen',
          }}
          animate={{ x: ['-10%', '8%', '-14%'], y: ['-6%', '10%', '-4%'] }}
          transition={{ duration: layer.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
