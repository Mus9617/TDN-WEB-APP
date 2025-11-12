import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const tiers = [
  {
    title: 'Apoyo básico',
    description: 'Un pequeño empujón para el servidor.',
    price: '5 €',
    accent: 'border-white/20',
  },
  {
    title: 'Apoyo generoso',
    description: 'Para los que quieren ir un paso más allá.',
    price: '10 €',
    accent: 'border-aurora/50',
  },
  {
    title: 'Apoyo legendario',
    description: '¡Eres parte del núcleo! Muchas gracias.',
    price: '20 €',
    accent: 'border-ember/60',
  },
]

export function DonationsPage() {
  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Tienda</p>
        <h2 className="mt-2 font-display text-4xl uppercase">Apoya nuestro proyecto</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-300">
          Cada donación ayuda a mantener los servidores, los mods privados y la organización de eventos especiales.
          Gracias por mantener viva la comunidad.
        </p>
      </motion.section>

      <section className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.2} key={tier.title} className="rounded-3xl">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl border ${tier.accent} bg-black/60 p-6 backdrop-blur`}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{tier.title}</p>
              <h3 className="mt-3 font-display text-3xl text-white">{tier.price}</h3>
              <p className="mt-2 text-sm text-slate-300">{tier.description}</p>
              <button className="mt-6 w-full rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-aurora hover:text-aurora">
                Donar
              </button>
            </motion.article>
          </Tilt>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/15 bg-gradient-to-br from-black/60 via-black/40 to-aurora/10 p-6 text-sm text-slate-200"
      >
        Nota: Los artículos o beneficios del servidor (si los hubiera) se gestionarán en Discord tras la confirmación del pago.
      </motion.section>
    </div>
  )
}
