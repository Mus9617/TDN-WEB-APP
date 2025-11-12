import { useEffect, useRef } from 'react'
import trailerVideo from '../assets/media/trailer.mp4'

export function CinematicBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => video.play().catch(() => {})
    let handler: (() => void) | null = null
    if (video.readyState >= 2) {
      play()
    } else {
      const listener = () => {
        play()
        video.removeEventListener('canplay', listener)
      }
      handler = listener
      video.addEventListener('canplay', listener)
    }

    return () => {
      if (handler) {
        video.removeEventListener('canplay', handler)
      }
      video.pause()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
      src={trailerVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  )
}
