import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export function ParticlesField() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo(
    () => ({
      background: { color: 'transparent' },
      fullScreen: false,
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: ['#ffffff', '#dbeafe'] },
        shape: { type: 'circle' as const },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: { enable: true, speed: 0.4, minimumValue: 0.1 },
        },
        size: {
          value: { min: 1, max: 3.5 },
          random: true,
          animation: {
            enable: true,
            speed: 1.2,
            minimumValue: 0.8,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: { min: 0.3, max: 1 },
          direction: 'bottom' as const,
          outModes: { default: 'out' as const },
          random: true,
          straight: false,
          gravity: {
            enable: true,
            acceleration: 0.4,
          },
          drift: 0.4,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'bubble' },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 80,
            duration: 1.5,
            size: 4.5,
            opacity: 0.6,
          },
        },
      },
      emitters: {
        direction: 'top' as const,
        rate: {
          delay: 0.1,
          quantity: 1,
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          x: 50,
          y: -5,
        },
      },
    }),
    [],
  )

  return (
    <Particles
      id="tdn-particles"
      className="pointer-events-none absolute inset-0 z-0 opacity-80 mix-blend-screen"
      options={options}
      init={particlesInit}
    />
  )
}
