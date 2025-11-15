import { motion } from 'framer-motion'
import { EnvelopeIcon, SignalIcon, ChatBubbleLeftRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

const staff = [
  { name: 'Bola8ttv', role: 'Founder · Owner', contact: '@Bola8ttv', status: 'Online' },
  { name: 'Fundead', role: 'Admin · Operaciones', contact: '@Fundead', status: 'En servicio' },
  { name: 'Pacocorrupto', role: 'Support', contact: '@Pacocorrupto', status: 'Patrullando' },
  { name: 'Zacarias', role: 'Support', contact: '@Zacarias', status: 'En base' },
  { name: 'Roldan', role: 'Support', contact: '@Roldan', status: 'En base' },
]

const protocols = [
  { title: 'Checklist de Entrada', steps: ['Descarga modpack', 'Sincroniza loadout', 'Prueba radio 7.23'] },
  { title: 'Código Rojo', steps: ['Mantén voz baja', 'Activa ping en Discord', 'Evacúa al trader más cercano'] },
]

const frequencies = [
  { label: 'Radio 7.23', desc: 'Pedidos traders + misiones fantasma' },
  { label: 'Radio 5.90', desc: 'Alertas Quimeras y mutaciones nuevas' },
  { label: 'Radio 2.40', desc: 'Operaciones PVP y extracciones' },
]

const streamClips = [
  {
    title: 'Asalto a la Cicatriz Roja',
    streamer: 'Bola8ttv',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=60',
    url: 'https://www.twitch.tv/bola8ttv',
  },
  {
    title: 'Colapso del bunker Nébula',
    streamer: 'Fundead',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=60',
    url: 'https://www.twitch.tv/',
  },
  {
    title: 'PVP nocturno en Norinsk',
    streamer: 'Pacocorrupto',
    image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=900&q=60',
    url: 'https://www.twitch.tv/',
  },
]

const streamers = [
  {
    name: 'Bola8ttv',
    platform: 'Twitch',
    handle: 'twitch.tv/bola8ttv',
    schedule: 'Directos nocturnos · raids y eventos',
  },
  {
    name: 'Fundead',
    platform: 'Twitch',
    handle: 'twitch.tv/fundead',
    schedule: 'Madrugadas · gestión de bases',
  },
  {
    name: 'Pacocorrupto',
    platform: 'YouTube',
    handle: 'youtube.com/@pacocorrupto',
    schedule: 'Highlights semanales · soporte',
  },
]

export function IntelPage() {
  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">intel</p>
            <h2 className="font-display text-4xl uppercase">Comando & staff</h2>
            <p className="mt-2 text-sm text-slate-300">Escuadrón activo 24/7. Contacta vía Discord antes de entrar a zonas rojas.</p>
          </div>
          <a
            href="https://discord.com/servers/tierra-de-nadie-1095673299515748462"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em]"
          >
            <ChatBubbleLeftRightIcon className="h-4 w-4 text-aurora" />
            Abrir Discord
          </a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {staff.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{member.role}</p>
              <h3 className="font-display text-2xl">{member.name}</h3>
              <p className="text-sm text-slate-300">{member.contact}</p>
              <span className="mt-3 inline-block rounded-full border border-aurora/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-aurora">
                {member.status}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-black/50 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">protocolos</p>
          <h3 className="mt-3.font-display text-3xl uppercase">Procedimientos críticos</h3>
          <div className="mt-6 space-y-5">
            {protocols.map((protocol) => (
              <div key={protocol.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.35em] text-ember">{protocol.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {protocol.steps.map((step) => (
                    <li key={step}>• {step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-ember/20 p-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">frecuencias</p>
          <h3 className="mt-3 font-display text-3xl uppercase">Canales oficiales</h3>
          <div className="mt-5 space-y-4">
            {frequencies.map((freq) => (
              <div key={freq.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-4">
                <SignalIcon className="h-8 w-8 text-aurora" />
                <div>
                  <p className="font-display text-xl">{freq.label}</p>
                  <p className="text-sm text-slate-300">{freq.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/70 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Contacto directo</p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <EnvelopeIcon className="h-4 w-4 text-ember" /> support@tierradenadie.gg
              </span>
              <span className="inline-flex items-center gap-2">
                <SignalIcon className="h-4 w-4 text-aurora" /> steam://connect/5.9.151.150:2402
              </span>
            </div>
          </div>
        </motion.article>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-black/45 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">stream clips</p>
        <h3 className="font-display text-3xl uppercase">Highlights recientes</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {streamClips.map((clip) => (
            <article key={clip.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60">
              <div
                className="h-40 w-full bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${clip.image})` }}
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-aurora">{clip.streamer}</p>
                  <h4 className="font-display text-2xl text-white">{clip.title}</h4>
                </div>
                <a
                  href={clip.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.3em]"
                >
                  <PlayCircleIcon className="h-4 w-4 text-aurora" />
                  Ver clip
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-black/45 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">streamers & contacto</p>
        <h3 className="font-display text-3xl uppercase">Transmisiones oficiales</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {streamers.map((item) => (
            <article key={item.name} className="rounded-3xl border border-white/10 bg-black/55 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-aurora">{item.platform}</p>
              <h4 className="font-display text-2xl text-white">{item.name}</h4>
              <p className="text-sm text-slate-300">{item.schedule}</p>
              <a
                href={`https://${item.handle}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs uppercase tracking-[0.4em] text-slate-400 hover:text-white"
              >
                {item.handle}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
