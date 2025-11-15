import { motion } from 'framer-motion'
import { MapIcon, FireIcon } from '@heroicons/react/24/outline'

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M12 3L4 6v6c0 4.97 3.582 9.625 8 11 4.418-1.375 8-6.03 8-11V6l-8-3Z" strokeWidth={1.5} />
    <path d="M9.5 12.5 12 15l5-5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const zones = [
  {
    title: 'Bunkeres anómalos',
    tag: 'Zona PVP',
    icon: ShieldIcon,
    description:
      'Bunkeres casi a oscuras. Si no llevas linterna, date por perdido. Loot militar y cajas que solo se abren con llave. Territorio PVP.',
    perks: ['Loot militar raro', 'Llaves secretas', 'Ambiente opresivo'],
  },
  {
    title: "Devil's Castle",
    tag: 'Zona PVE',
    icon: MapIcon,
    description:
      'Criaturas inspiradas en S.T.A.L.K.E.R. patrullan el castillo. Sin calibre pesado, no sales con vida. Busca la caja escondida.',
    perks: ['Criaturas STALKER', 'Loot excepcional', 'Caja oculta'],
  },
  {
    title: 'Novodmitrovsk',
    tag: 'PVP con anomalías',
    icon: FireIcon,
    description:
      'Los bandidos protegen una caja especial. Si te oyen, disparan sin avisar. Anomalías y monstruos se activan con el ruido.',
    perks: ['Caja de bandidos', 'Monstruos errantes', 'Trampas sonoras'],
  },
  {
    title: 'Castillo Voron / Isla Skalisty',
    tag: 'PVE extremo',
    icon: ShieldIcon,
    description:
      'Quimeras y mutantes acechan la isla. Mata a las bestias para abrir la caja del castillo y explorar los secretos de la isla.',
    perks: ['Gran loot oculto', 'Quimeras en manada', 'Eventos sorpresa'],
  },
  {
    title: 'Tissy Military',
    tag: 'PVP gas',
    icon: MapIcon,
    description:
      'Zona cubierta de gas tóxico. Con la llave adecuada puedes abrir el edificio y llevarte loot enorme, pero todo el mundo sabrá que estás dentro.',
    perks: ['Gas tóxico', 'PvP asegurado', 'Edificio con llave'],
  },
  {
    title: 'Troitskoe Military',
    tag: 'PVP abierto',
    icon: FireIcon,
    description: 'Full PVP con loot militar de alto nivel. Ideal para practicar asaltos rápidos.',
    perks: ['Loot militar', 'Acceso sencillo', 'Combates frenéticos'],
  },
  {
    title: 'Krasnostav',
    tag: 'PvP · atraco',
    icon: MapIcon,
    description:
      'Los ágiles entran al banco, roban el cajero y si tienen la tarjeta negra pueden abrir el edificio. Prepárate para emboscadas.',
    perks: ['ATM robable', 'Tarjeta negra', 'Zona urbana cerrada'],
  },
  {
    title: 'Airfield',
    tag: 'Hotspot PVP',
    icon: FireIcon,
    description:
      'La zona más concurrida. Puedes abrir la puerta con tarjeta verde y robar el ATM, pero es donde más actividad PVP hay.',
    perks: ['Tarjeta verde', 'ATM', 'PvP constante'],
  },
  {
    title: 'Altar',
    tag: 'PVE quimeras',
    icon: ShieldIcon,
    description:
      'Monstruos y quimeras protegen el edificio. Si logras matarlos y usar la tarjeta violeta, descubrirás un loot único.',
    perks: ['Tarjeta violeta', 'Quimeras guardianas', 'Loot exótico'],
  },
]

const bunkerTimeline = [
  { name: 'Bunkeres anómalos', detail: 'Oscuros y llenos de cajas con llave. Lleva linterna y filtros.', status: 'Activo' },
  {
    name: "Devil's Castle",
    detail: 'Criaturas STALKER y cajas que cambian de posición. Resetea semanalmente.',
    status: 'Infestado',
  },
  {
    name: 'Novodmitrovsk',
    detail: 'Señal de bandidos abierta. Anomalías auditivas en toda la ciudad.',
    status: 'Vigilado',
  },
]

const anomalies = [
  { title: 'Brechas de Aurora', detail: 'Aparecen cada 3 horas. Permiten fast travel arriesgado.' },
  { title: 'Niebla Negra', detail: 'Reduce visibilidad al 30%. Las Quimeras escuchan mejor.' },
  { title: 'Tormentas EMP', detail: 'Apagan miras digitales. Ideal para emboscadas.' },
]

export function ZonesPage() {
  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="grid gap-6 md:grid-cols-3">
        {zones.map((zone) => (
          <motion.article
            key={zone.title}
            whileHover={{ y: -6, borderColor: 'rgba(244,63,94,0.7)' }}
            className="rounded-3xl border border-white/10 bg-black/50 p-5 transition"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <zone.icon className="h-7 w-7 text-aurora" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{zone.tag}</p>
                <h3 className="font-display text-2xl uppercase">{zone.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-300">{zone.description}</p>
            <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.3em] text-slate-400">
              {zone.perks.map((perk) => (
                <li key={perk}>▸ {perk}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.section>

      <section className="grid gap-8 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-black/50 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">búnkeres</p>
          <h3 className="mt-3 font-display text-3xl uppercase">Ruta subterránea</h3>
          <div className="mt-6 space-y-4">
            {bunkerTimeline.map((bunker, index) => (
              <div key={bunker.name} className="flex gap-4">
                <span className="text-sm text-white/60">{index + 1}.</span>
                <div className="flex-1 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-2xl text-white">{bunker.name}</h4>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.3em] ${
                        bunker.status === 'Activo' ? 'border-aurora text-aurora' : 'border-ember text-ember'
                      }`}
                    >
                      {bunker.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{bunker.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 to-aurora/10 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">anomalías</p>
          <h3 className="mt-3 font-display text-3xl uppercase">Clima STALKER</h3>
          <div className="mt-5 space-y-4">
            {anomalies.map((anom) => (
              <div key={anom.title} className="rounded-2xl border border-white/5 bg-black/50 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-ember">{anom.title}</p>
                <p className="text-sm text-slate-300">{anom.detail}</p>
              </div>
            ))}
          </div>
        </motion.article>
      </section>
    </div>
  )
}
