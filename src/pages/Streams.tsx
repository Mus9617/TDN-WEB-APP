import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import logo from '../assets/logo.png'
import seprona from '../assets/media/seprona.png'
import supra from '../assets/media/supra.png'
import honor from '../assets/media/honor.png'
import caramelos from '../assets/media/caramelos.png'
import colecciones from '../assets/media/colleciones.png'

type GalleryItem = {
  id: string
  title: string
  description: string
  images: string[]
}

const streamers = [
  { name: 'Bola8TTV', role: 'Owner / Host', schedule: 'Eventos nocturnos + alertas en vivo', platform: 'https://www.twitch.tv/bola8ttv' },
  { name: 'Fundead', role: 'Admin', schedule: 'Cobertura de raids y pruebas de mods', platform: 'https://www.twitch.tv/' },
  { name: 'Pacocorrupto', role: 'Support', schedule: 'Misiones de rescate y guías tácticas', platform: 'https://www.twitch.tv/' },
]

const clips = [
  { title: 'Helheim bajo tormenta', duration: '02:14', streamer: 'Bola8TTV', url: 'https://www.twitch.tv/bola8ttv' },
  { title: 'Quimera derribada', duration: '01:01', streamer: 'Fundead', url: 'https://www.twitch.tv/' },
  { title: 'Trader clandestino', duration: '00:47', streamer: 'Pacocorrupto', url: 'https://www.twitch.tv/' },
]

const gallery: GalleryItem[] = [
  { id: 'seprona', title: 'Colección Seprona', description: 'Patrullas en bosque tóxico defendiendo traders.', images: [seprona, supra] },
  { id: 'supra', title: 'Colección Vehículos', description: 'Vheiculos Unicos.', images: [supra, caramelos] },
  { id: 'honor', title: 'Colección Superviviente Honor', description: 'Supervivientes.', images: [honor, seprona] },
  { id: 'caramelos', title: 'Colección Caramelitos de Risa', description: 'Planta y Da Felicidad mientras llenas tus bolsillos.', images: [caramelos, colecciones] },
  { id: 'collections', title: 'Colección Funkopoc & Comics', description: 'Saca tu Espiritu mAs Friki.', images: [colecciones, honor] },
]

type ActiveGallery = { item: GalleryItem; index: number }

export function StreamsPage() {
  const [active, setActive] = useState<ActiveGallery | null>(null)

  const handleNext = () => {
    if (!active) return
    setActive({ item: active.item, index: (active.index + 1) % active.item.images.length })
  }

  const handlePrev = () => {
    if (!active) return
    setActive({ item: active.item, index: (active.index - 1 + active.item.images.length) % active.item.images.length })
  }

  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Streams</p>
        <h2 className="font-display text-4xl uppercase">Directos, clips y galería</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Sigue los directos oficiales, revive los momentos más intensos y abre la galería para ver cada captura en tamaño completo. Todo
          conserva la estética oscura del servidor y funciona perfecto en móvil.
        </p>
      </motion.section>

      <section>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Equipo en vivo</p>
        <h3 className="font-display text-3xl uppercase">Streamers oficiales</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {streamers.map((streamer) => (
            <Tilt key={streamer.name} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.15} className="rounded-3xl">
              <motion.article className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-2">
                    <img src={logo} alt={streamer.name} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{streamer.role}</p>
                    <h4 className="font-display text-2xl text-white">{streamer.name}</h4>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-300">{streamer.schedule}</p>
                <a
                  href={streamer.platform}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-aurora/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-aurora"
                >
                  Ver canal
                </a>
              </motion.article>
            </Tilt>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-black/50 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Clips</p>
          <h3 className="font-display text-3xl uppercase">Momentos destacados</h3>
          <div className="mt-5 space-y-4">
            {clips.map((clip) => (
              <div key={clip.title} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/50">
                  <span>{clip.streamer}</span>
                  <span>{clip.duration}</span>
                </div>
                <h4 className="mt-2 font-display text-xl text-white">{clip.title}</h4>
                <a
                  href={clip.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full border border-white/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
                >
                  Reproducir clip
                </a>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-ember/15 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Contacto</p>
          <h3 className="font-display text-3xl uppercase">Colabora con nosotros</h3>
          <p className="mt-3 text-sm text-slate-300">
            ¿Eres creador y quieres streamear Tierra de Nadie? Escríbenos y te daremos acceso anticipado a eventos, assets y misiones.
          </p>
          <div className="mt-5 space-y-3 text-sm text-white/80">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Discord</p>
              <a href="https://discord.com/servers/tierra-de-nadie-1095673299515748462" target="_blank" rel="noreferrer" className="text-aurora">
                discord.gg/tierradenadie
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Correo</p>
              <p>streamers@tierradenadie.gg</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Horario</p>
              <p>Coordinamos clips cada 20 segundos con el bot oficial.</p>
            </div>
          </div>
        </motion.article>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Galería</p>
        <h3 className="font-display text-3xl uppercase">Momentos congelados</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => setActive({ item, index: 0 })}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/60 text-left"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.images[0]} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <p className="absolute left-4 top-3 text-xs uppercase tracking-[0.4em] text-aurora">{item.title}</p>
              </div>
              <div className="p-4 text-sm text-slate-300">{item.description}</div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-black/90 p-6">
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-rose-500/60 bg-rose-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-rose-200 shadow-lg shadow-black/60"
              >
                Cerrar
              </button>
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img src={active.item.images[active.index]} alt={active.item.title} className="h-full w-full object-cover" />
                {active.item.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/60 px-3 py-2 text-sm font-semibold"
                    >
                      ‹
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/60 px-3 py-2 text-sm font-semibold"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-aurora">{active.item.title}</p>
                  <p className="text-sm text-slate-200">{active.item.description}</p>
                </div>
                {active.item.images.length > 1 && (
                  <p className="text-xs text-white/50">
                    {active.index + 1} / {active.item.images.length}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
