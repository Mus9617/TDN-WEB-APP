import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.png'

interface IntroOverlayProps {
  show: boolean
  onEnter: () => void
}

export function IntroOverlay({ show, onEnter }: IntroOverlayProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <motion.img
                src={logo}
                alt="Tierra de Nadie"
                className="h-28 w-28 rounded-3xl border border-white/10 bg-black/50 p-4 shadow-2xl"
                initial={{ rotateX: -30 }}
                animate={{ rotateX: 0 }}
              />
              <div className="absolute inset-0 rounded-3xl border border-ember/40 opacity-30 blur-xl" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Bienvenido</p>
              <h2 className="mt-2 font-display text-3xl uppercase text-white">Tierra de Nadie</h2>
              <p className="mt-2 max-w-sm text-sm text-slate-300">
                Prepárate para entrar al refugio. Ajusta tu radio y revisa tu gear antes de cruzar la niebla.
              </p>
            </div>
            <button
              type="button"
              onClick={onEnter}
              className="rounded-full border border-ember/60 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-ember transition hover:bg-ember/10"
            >
              Entrar al refugio
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
