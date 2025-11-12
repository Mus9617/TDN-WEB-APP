import { useEffect, useRef } from 'react'
import trailerVideo from '../assets/media/trailer.mp4'

export function CinematicBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => video.play().catch(() => {})
    let listener: (() => void) | null = null

    if (video.readyState >= 2) {
      play()
    } else {
      listener = () => {
        play()
        if (listener) {
          video.removeEventListener('canplay', listener)
        }
      }
      video.addEventListener('canplay', listener)
    }

    return () => {
      if (listener) {
        video.removeEventListener('canplay', listener)
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
