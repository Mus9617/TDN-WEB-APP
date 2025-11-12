import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const mods = [
  {
    title: 'Quimeras Mutation Pack',
    tag: 'Mutantes',
    description: 'IA reactiva que aprende tu ruta. Rastro químico persistente y audio direccional.',
  },
  {
    title: 'Bunkeres Dinámicos',
    tag: 'Endgame',
    description: 'Instancias multi-piso con puzzles de presión, cierre automático y loot mítico.',
  },
  {
    title: 'Economía Orgánica',
    tag: 'Traders',
    description: 'Rutas clandestinas por radio, reputación y misiones vivas estilo MMO.',
  },
  {
    title: 'Arsenal STALKER',
    tag: 'Gear',
    description: 'Armas balísticas con desgaste, miras térmicas alteradas y munición fabricable.',
  },
]

const pipelines = [
  { title: 'Radio Críptica', status: 'Activo', detail: 'Pedidos por frecuencia 7.23. Trader responde con delay.' },
  { title: 'Contrabando Subterráneo', status: 'Rotando', detail: 'Contenedores que cambian de bunker según wipe.' },
  { title: 'Misiones Fantasma', status: 'Beta', detail: 'Eventos cooperativos sorpresa vía bot de Discord.' },
]

const relics = [
  { name: 'Visor NOA-X', info: 'Aumenta visión térmica pero drena stamina x2.', icon: CpuChipIcon },
  { name: 'Katana Helheim', info: 'Ignora 15% de armadura. Solo drop en evento Rito de Ceniza.', icon: WrenchScrewdriverIcon },
  { name: 'Misil Quimera', info: 'Lanza granada química con tracking ligero.', icon: RocketLaunchIcon },
]

export function ArsenalPage() {
  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">arsenal</p>
            <h2 className="font-display text-4xl uppercase">Mods & sistemas activos</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Combina economía orgánica, IA mutante y bunkeres dinámicos. Cada sistema se integra para que el servidor se sienta vivo,
              hostil y siempre impredecible.
            </p>
          </div>
          <a
            href="https://discord.com/servers/tierra-de-nadie-1095673299515748462"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-aurora/50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-aurora transition hover:bg-aurora/10"
          >
            Manual de supervivencia
          </a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {mods.map((mod) => (
            <motion.article
              key={mod.title}
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/60 via-black/30 to-ember/10 p-4"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-ember">{mod.tag}</p>
              <h3 className="font-display text-2xl text-white">{mod.title}</h3>
              <p className="text-sm text-slate-300">{mod.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-black/50 p-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">contrabando</p>
          <h3 className="mt-3 font-display text-3xl uppercase">Pipelines clandestinos</h3>
          <div className="mt-6 space-y-4">
            {pipelines.map((pipe) => (
              <div key={pipe.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-2xl">{pipe.title}</h4>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-aurora">
                    {pipe.status}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{pipe.detail}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/30 to-toxic/20 p-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">reliquias</p>
          <h3 className="mt-3 font-display text-3xl uppercase">Loot emblemático</h3>
          <div className="mt-5 space-y-4">
            {relics.map((relic) => (
              <div key={relic.name} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-black/60 p-4">
                <relic.icon className="h-8 w-8 text-aurora" />
                <div>
                  <p className="font-display text-xl">{relic.name}</p>
                  <p className="text-sm text-slate-300">{relic.info}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      </section>
    </div>
  )
}
