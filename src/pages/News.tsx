import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import logo from '../assets/logo.png'

type NewsItem = {
  id: string
  title: string
  tag: string
  excerpt: string
  fullText: string
  publishedAt: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 'bunker-reboot',
    title: 'Búnkeres anómalos reactivados',
    tag: 'Operativo',
    excerpt: 'Helheim y Voron vuelven a abrir sus compuertas con llaves rotativas y recompensas militares.',
    fullText:
      'Los ingenieros del trader confirmaron que Helheim, Voron y Nebula vuelven a estar en rotación. Cada búnker avisa 10 minutos antes a través del bot de Discord. Las compuertas requieren dos llaves distintas y se cierran automáticamente tras 20 minutos. Si entras sin linterna NV te perderás en los pasillos porque una Quimera Alfa patrulla cada ala.',
    publishedAt: '12 NOV 2025',
    image: logo,
  },
  {
    id: 'stalker-event',
    title: 'Criaturas STALKER en Devil’s Castle',
    tag: 'Evento vivo',
    excerpt: 'La zona PVE se infestó con criaturas del mod S.T.A.L.K.E.R. El loot es brutal, pero casi nadie sale vivo.',
    fullText:
      'Devil’s Castle se transformó en una zona STALKER total: criaturas errantes bloquean las rutas, la niebla reduce la visibilidad y solo los mejores calibres atraviesan su piel. Si encuentras la caja escondida recibirás planos únicos que no aparecen en otra parte del mapa. Lleva torretas portátiles y coordina la extracción porque las anomalías cambian cada hora.',
    publishedAt: '10 NOV 2025',
    image: logo,
  },
  {
    id: 'trader-update',
    title: 'Trader clandestino rota a Novodmitrovsk',
    tag: 'Economía',
    excerpt: 'Durante 72h pagará triple por artefactos, pero los bandidos disparan a matar si escuchan pasos.',
    fullText:
      'Los bandidos rastrean al trader móvil, así que se desplazó a Novodmitrovsk. Mientras permanezca allí pagará triple por artefactos y materiales experimentales, pero activa guardias renegados que disparan en cuanto escuchan pasos. Llega con sigilo, utiliza humo y evita radios abiertas para no atraer a los monstruos cercanos.',
    publishedAt: '08 NOV 2025',
    image: logo,
  },
]

export function NewsPage() {
  const [activeItem, setActiveItem] = useState<NewsItem | null>(null)

  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Noticias</p>
        <h2 className="font-display text-4xl uppercase">Informes recientes</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Información directa desde el refugio principal. Los titulares se sincronizan con Discord y se refrescan dentro del sitio cada 20
          segundos para que no te pierdas ninguna alerta.
        </p>
      </motion.section>

      <section className="grid gap-6 lg:grid-cols-3">
        {newsItems.map((item, index) => (
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.15} key={item.id} className="rounded-3xl">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black/60"
              onClick={() => setActiveItem(item)}
            >
              <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-gradient-to-br from-black via-black to-ember/30">
                <img src={item.image} alt={item.title} className="h-full w-full object-contain opacity-80 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <span className="absolute left-4 top-4 rounded-full border border-aurora/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-aurora">
                  {item.tag}
                </span>
                <span className="absolute bottom-3 right-4 text-xs uppercase tracking-[0.4em] text-white/60">{item.publishedAt}</span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-2xl text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.excerpt}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-ember">Leer informe completo</p>
              </div>
            </motion.article>
          </Tilt>
        ))}
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-black/90 p-6 shadow-emerald-500/10">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70 hover:text-white"
              >
                Cerrar
              </button>
              <p className="text-xs uppercase tracking-[0.4em] text-aurora">{activeItem.tag}</p>
              <h3 className="mt-2 font-display text-3xl">{activeItem.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.4em] text-white/40">{activeItem.publishedAt}</p>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                <p>{activeItem.fullText}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Toma captura y compártela en Discord si presencias la anomalía.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

