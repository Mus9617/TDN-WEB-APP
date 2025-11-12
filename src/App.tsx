import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Howl } from 'howler'
import { HomePage } from './pages/Home'
import { ZonesPage } from './pages/Zones'
import { ArsenalPage } from './pages/Arsenal'
import { IntelPage } from './pages/Intel'
import { DonationsPage } from './pages/Donations'
import { CinematicBackground } from './components/CinematicBackground'
import { AmbientAudioToggle } from './components/AmbientAudioToggle'
import { IntroOverlay } from './components/IntroOverlay'
import logo from './assets/logo.png'
import soundtrack from './assets/media/musicafondo.mp3'

const tabs = [
  { label: 'Inicio', path: '/' },
  { label: 'Zonas', path: '/zonas' },
  { label: 'Arsenal', path: '/arsenal' },
  { label: 'Donaciones', path: '/donaciones' },
  { label: 'Intel', path: '/intel' },
]

export default function App() {
  const location = useLocation()
  const [showIntro, setShowIntro] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const howlRef = useRef<Howl | null>(null)
  const pauseTimeoutRef = useRef<number | undefined>(undefined)
  const soundInstanceRef = useRef<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showIntro])

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current)
      }
      howlRef.current?.unload()
    }
  }, [])

  const ensureHowl = useCallback(() => {
    if (!howlRef.current) {
      howlRef.current = new Howl({
        src: [soundtrack],
        loop: true,
        volume: 0.35,
        html5: true,
      })
    }
    return howlRef.current
  }, [])

  const playSound = useCallback(() => {
    const sound = ensureHowl()
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current)
      pauseTimeoutRef.current = undefined
    }
    if (soundInstanceRef.current !== null) {
      sound.stop(soundInstanceRef.current)
    }
    const id = sound.play()
    soundInstanceRef.current = id
    sound.volume(0, id)
    sound.fade(0, 0.35, 500, id)
  }, [ensureHowl])

  const pauseSound = useCallback(() => {
    const sound = howlRef.current
    const id = soundInstanceRef.current
    if (!sound || id === null) return
    const current = sound.volume(id) as number
    sound.fade(current, 0, 300, id)
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current)
    }
    pauseTimeoutRef.current = window.setTimeout(() => {
      sound.stop(id)
      soundInstanceRef.current = null
      pauseTimeoutRef.current = undefined
    }, 320)
  }, [])

  const handleIntroEnter = () => {
    setShowIntro(false)
    if (soundEnabled) {
      playSound()
    }
  }

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev
      if (next) {
        playSound()
      } else {
        pauseSound()
      }
      return next
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <CinematicBackground />
      <div className="pointer-events-none fixed inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      <IntroOverlay show={showIntro} onEnter={handleIntroEnter} />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col px-5 pb-12 pt-6 md:px-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/50 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-2">
              <img src={logo} alt="Tierra de Nadie logo" className="h-full w-full object-contain" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(244,63,94,0.3),_transparent)] mix-blend-screen opacity-50" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Servidor DayZ</p>
              <h1 className="font-display text-4xl uppercase tracking-[0.3em] text-white">Tierra de Nadie</h1>
              <p className="text-sm text-slate-300">PVE · PVP · Zombies · Quimeras · Bunkeres dinámicos</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav className="flex flex-wrap items-center gap-2">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  className={({ isActive }) =>
                    [
                      'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition',
                      isActive ? 'border-ember bg-ember/20 text-white' : 'border-white/10 text-white/60 hover:text-white',
                    ].join(' ')
                  }
                >
                  {tab.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <AmbientAudioToggle enabled={soundEnabled} onToggle={handleToggleSound} />
              <a
                href="https://discord.com/servers/tierra-de-nadie-1095673299515748462"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-aurora/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-aurora transition hover:bg-aurora/10"
              >
                Discord
              </a>
              <a
                href="steam://connect/5.9.151.150:2402"
                className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:text-white"
              >
                Conectar
              </a>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-10 flex-1"
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/zonas" element={<ZonesPage />} />
              <Route path="/arsenal" element={<ArsenalPage />} />
              <Route path="/donaciones" element={<DonationsPage />} />
              <Route path="/intel" element={<IntelPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </motion.main>
        </AnimatePresence>

        <footer className="mt-10 border-t border-white/5 pt-6 text-center text-xs uppercase tracking-[0.4em] text-white/50">
          © {new Date().getFullYear()} Tierra de Nadie · No afiliado a Bohemia Interactive
        </footer>
      </div>
    </div>
  )
}



