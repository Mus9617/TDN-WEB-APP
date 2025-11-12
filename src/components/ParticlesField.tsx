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
      fpsLimit: 45,
      detectRetina: true,
      particles: {
        number: { value: 80, density: { enable: true, area: 900 } },
        color: { value: ['#f43f5e', '#22d3ee', '#a3e635'] },
        opacity: {
          value: { min: 0.05, max: 0.35 },
          animation: { enable: true, speed: 0.6 },
        },
        size: {
          value: { min: 0.5, max: 2.5 },
          random: true,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none' as const,
          outModes: { default: 'out' as const },
          random: true,
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        detectsOn: 'window' as const,
        events: {
          onHover: { enable: true, mode: 'trail' },
        },
        modes: {
          trail: {
            delay: 0.005,
            pauseOnStop: true,
            particles: {
              size: { value: 3 },
              opacity: { value: 0.2 },
              move: { speed: 0.2 },
            },
          },
        },
      },
    }),
    [],
  )

  return (
    <Particles
      id="tdn-particles"
      className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      options={options}
      init={particlesInit}
    />
  )
}
