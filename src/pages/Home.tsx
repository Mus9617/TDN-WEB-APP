import { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { BoltIcon, RadioIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { usePlayersOnline } from '../hooks/usePlayersOnline'

const serverIp = '5.9.151.150:2402'

const staticStats = [
  { label: 'Purga Cada 2 Domingos', value: '2', sub: 'PVP Todo EL Mapa', icon: BoltIcon },
  { label: 'Zonas PVE/PVP Con Mutantes', value: '13', sub: 'Rotación dinámica', icon: RadioIcon },
]

const transmissions = [
  { time: '01:12', content: 'Búnker TDN sellado. Detección de gas rojo. Usa filtros NV-T3.' },
  { time: '02:47', content: 'Helicoptero Estrellado. Señal débil.' },
  { time: '04:05', content: 'Tormenta química rumbo a Elektrozavodsk. Evita techos abiertos.' },
  { time: '05:22', content: 'Quimera Alfa triangulada en bosque norte. Señuelo auditivo recomendado. Devil Castle' },
]

const rituals = [
  {
    title: 'Lore',
    tag: 'PVE Hostil /PVP',
    text: 'Lore Sobre El Escuadorn de TDN Con Recompensas Exculsivas',
  },
  {
    title: 'Domingo Sangriento',
    tag: 'PVP Controlado',
    text: 'Cada Domiingo Purga Total Todo el Mapa PVP y las bases Raid Raideables.',
  },
  {
    title: 'Bunkerer Anomalía ',
    tag: 'PVP',
    text: 'Descubre El Mundo Subterraneo de los Bunkeres TDN y Consigue tu mejor loot.',
  },
]

export function HomePage() {
  const [copied, setCopied] = useState(false)
  const { value: playersOnline } = usePlayersOnline()

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(serverIp)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid gap-8 lg:grid-cols-[1.4fr,0.6fr]"
      >
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.25} className="rounded-3xl">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
            <div className="absolute -left-14 -top-14 h-48 w-48 rounded-full bg-radar opacity-40 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Servidor hispano · DayZ</p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[1.1]">
                PVE seguro.
                <br />
                PVP despiadado.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-200">
                Tierra de Nadie combina Quimeras, traders clandestinos y bunkeres vivos. Cada amanecer cambia las reglas.
                Elige entre zonas vigiladas o arrástrate por territorios mutantes con recompensa triple.
              </p>

              <div className="mt-6 flex flex-wrap.items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Connect ahora</p>
                  <div className="mt-2 flex items-center gap-3">
                    <code className="rounded-lg bg-black/70 px-3 py-1.5 font-mono text-base text-aurora">{serverIp}</code>
                    <button
                      onClick={copyIp}
                      className="rounded-full border border-aurora/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-aurora transition hover:bg-aurora/20"
                    >
                      {copied ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Wipe</p>
                  <p className="font-display text-2xl text-ember">Cada Actualicacion</p>
                  <p className="text-xs text-slate-400">Eventos sorpresa mid-week</p>
                </div>
              </div>
            </div>
          </article>
        </Tilt>

        <aside className="space-y-4">
          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.2} className="rounded-3xl">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/60 p-4"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <ShieldCheckIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Supervivientes activos</p>
                <div className="flex items-baseline gap-3">
                  <div className="font-display text-3xl text-white">{playersOnline ?? '—'}</div>
                  <div className="flex items-center gap-1 text-xs text-emerald-300 uppercase tracking-[0.4em]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    Live
                  </div>
                </div>
                <p className="text-xs text-slate-400">Actualiza cada 20s</p>
              </div>
            </motion.div>
          </Tilt>

          {staticStats.map((stat) => (
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} glareEnable glareMaxOpacity={0.2} key={stat.label} className="rounded-3xl">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/60 p-4"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <stat.icon className="h-6 w-6 text-ember" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
                  <p className="font-display text-3xl text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.sub}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </aside>
      </motion.section>

      <section className="grid gap-8 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-black/50 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">transmisiones</p>
          <h3 className="mt-3 font-display text-3xl uppercase">Últimas señales</h3>
          <div className="mt-4 space-y-4 font-mono text-sm text-emerald-200">
            {transmissions.map((log) => (
              <motion.div
                key={log.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/5.bg-black/70 p-4 shadow-inner shadow-emerald-500/10"
              >
                <span className="text-aurora">{log.time}</span> — {log.content}
              </motion.div>
            ))}
          </div>
        </motion.article>

        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.15} className="rounded-3xl">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/70 via-black/40 to-ember/20 p-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">rituales</p>
            <h3 className="mt-3 font-display text-3xl uppercase">Eventos climáticos</h3>
            <div className="mt-6 space-y-4">
              {rituals.map((ritual) => (
                <div key={ritual.title} className="rounded-2xl border border-white/10 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-ember">{ritual.tag}</p>
                  <h4 className="font-display text-2xl text-white">{ritual.title}</h4>
                  <p className="text-sm text-slate-300">{ritual.text}</p>
                </div>
              ))}
            </div>
          </motion.article>
        </Tilt>
      </section>
    </div>
  )
}
