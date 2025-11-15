import { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import basepremium2 from '../assets/media/basepremium2.jpg'
import casapremium1 from '../assets/media/casapremium1.png'
import bassepremium5 from '../assets/media/bassepremium5.png'
import basepremium4 from '../assets/media/basepremium4.png'
import basepremium6 from '../assets/media/basepremium6.png'
import basepremium7 from '../assets/media/basepremium7.png'
import mesaskin from '../assets/media/mesaskin.jpg'
import colecciones from '../assets/media/colleciones.png'

const PAYPAL_URL = 'https://www.paypal.com/paypalme/bola8pr'

type MediaProduct = {
  id: string
  title: string
  desc: string
  price: number
  images: string[]
}

type SkinProduct = {
  id: string
  title: string
  description: string
  price: string
  images: string[]
}

const premiumBases: MediaProduct[] = [
  { id: 'helheim-refuge', title: 'Refugio Helheim', desc: 'Búnker reforzado con traders ocultos y doble cámara acorazada.', price: 20, images: [casapremium1, basepremium2] },
  { id: 'skalisty-outpost', title: 'Outpost Skalisty', desc: 'Base costera lista para defensas anti-pvp y respawn inmediato.', price: 20, images: [basepremium2, basepremium4] },
  { id: 'voron-citadel', title: 'Ciudadela Voron', desc: 'Estructura modular con helipuerto y laboratorio interno.', price: 20, images: [bassepremium5, basepremium6] },
  { id: 'shadow-haven', title: 'Haven Sombrío', desc: 'Casco urbano impecable con habitaciones secretas y garaje doble.', price: 20, images: [basepremium4, basepremium7] },
  { id: 'tissy-fort', title: 'Fortaleza Tissy', desc: 'Diseño militar listo para gas tóxico con esclusas y sala médica.', price: 20, images: [basepremium6, casapremium1] },
  { id: 'altar-stronghold', title: 'Stronghold Altar', desc: 'Base vertical para defenderte de kimeras en toda la región.', price: 20, images: [basepremium7, basepremium2] },
]

const services = [
  {
    title: 'Prioridad de cola (1 mes)',
    price: '10 €',
    description: 'Cuando el servidor está lleno pasas a los primeros puestos. Duración 31 días.',
  },
  {
    title: 'Prioridad de cola (6 meses)',
    price: '50 €',
    description: 'Versión extendida para clanes que juegan diario.',
  },
  {
    title: 'Ropa personalizada',
    price: '40 €',
    description: 'Chaleco, mochila, pantalón y camisa con tu logo. Solo tú puedes usarla.',
  },
  {
    title: 'Vehículos personalizados',
    price: '30 € / 40 €',
    description: 'Versiones estándar o avanzada. Debes tener el vehículo ingame para aplicar la skin.',
  },
  {
    title: 'Banderas personalizadas',
    price: '10 €',
    description: 'Diseño con tus colores y logo para marcar territorios.',
  },
  {
    title: 'Tag de clan',
    price: '10 € + prioridad 6 meses',
    description: 'Tag único más prioridad de cola durante seis meses.',
  },
]

const pouchTiers = [
  { title: 'Pouch VIP', price: '10 €', detail: '36 slots, incluye rol VIP en Discord y TDN-Tienda.' },
  { title: 'Pouch Ultra', price: '20 €', detail: '48 slots y soporte preferente para tickets.' },
  { title: 'VIP Oro', price: '30 €', detail: 'Rol VIP + pase batalla 1 mes + Pouch Ultra.' },
]

const skinPacks: SkinProduct[] = [
  {
    id: 'armory-table',
    title: 'Mesa de skins',
    description: 'Configura colores y emblemas para tus armas favoritas. Incluye revisión del staff.',
    price: '40 €',
    images: [mesaskin, colecciones],
  },
  {
    id: 'collections',
    title: 'Colecciones especiales',
    description: 'Sets limitados (Seprona, Supra, Honor, Caramelos) que rotan cada temporada.',
    price: '20 €',
    images: [colecciones, mesaskin],
  },
]

function ProductCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  const gotoNext = () => setIndex((prev) => (prev + 1) % images.length)
  const gotoPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
      <img src={images[index]} alt={alt} className="h-full w-full object-cover" />
      {hasMultiple && (
        <>
          <button
            onClick={gotoPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/60 px-2 py-1 text-xs font-semibold"
          >
            ‹
          </button>
          <button
            onClick={gotoNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/60 px-2 py-1 text-xs font-semibold"
          >
            ›
          </button>
          <span className="absolute bottom-2 right-3 rounded-full bg-black/60 px-2 text-[10px] text-white/70">
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  )
}

export function ShopPage() {
  return (
    <div className="space-y-10">
      <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Tienda premium</p>
        <h2 className="font-display text-4xl uppercase">Planos y servicios exclusivos</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-300">
          Tras donar realiza una captura y abre ticket en Discord para coordinar la entrega en el servidor. Todo pasa por{' '}
          <a className="text-aurora underline" href={PAYPAL_URL} target="_blank" rel="noreferrer">
            paypal.me/bola8pr
          </a>
          .
        </p>
      </motion.section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Bases premium</p>
            <h3 className="font-display text-3xl uppercase">Planos listos para desplegar</h3>
          </div>
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">20 € c/u</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {premiumBases.map((base) => (
            <Tilt key={base.id} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.15} className="rounded-3xl">
              <motion.article whileHover={{ y: -4 }} className="h-full overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                <ProductCarousel images={base.images} alt={base.title} />
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-2xl text-white">{base.title}</h4>
                    <span className="text-sm font-semibold text-aurora">{base.price} €</span>
                  </div>
                  <p className="text-sm text-slate-300">{base.desc}</p>
                  <a
                    href={PAYPAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-aurora/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-aurora transition hover:bg-aurora/10"
                  >
                    Comprar
                  </a>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">Captura + ticket tras donar</p>
                </div>
              </motion.article>
            </Tilt>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-black/50 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Servicios</p>
          <h3 className="font-display text-3xl uppercase">Desbloqueos del refugio</h3>
          <div className="mt-5 space-y-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xl">{service.title}</h4>
                  <span className="text-sm font-semibold text-ember">{service.price}</span>
                </div>
                <p className="text-sm text-slate-300">{service.description}</p>
                <a href={PAYPAL_URL} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full border border-white/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white">
                  Solicitar
                </a>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-aurora/15 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">VIP & Pouch</p>
          <h3 className="font-display text-3xl uppercase">Inventario protegido</h3>
          <div className="mt-6 space-y-4">
            {pouchTiers.map((tier) => (
              <div key={tier.title} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xl">{tier.title}</h4>
                  <span className="text-sm font-semibold text-aurora">{tier.price}</span>
                </div>
                <p className="text-sm text-slate-300">{tier.detail}</p>
                <a
                  href={PAYPAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full border border-aurora/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-aurora hover:bg-aurora/10"
                >
                  Activar
                </a>
              </div>
            ))}
          </div>
        </motion.article>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Skins</p>
        <h3 className="font-display text-3xl uppercase">Diseños personalizados</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {skinPacks.map((pack) => (
            <Tilt key={pack.id} tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable glareMaxOpacity={0.2} className="rounded-3xl">
              <motion.article className="overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                <ProductCarousel images={pack.images} alt={pack.title} />
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-2xl text-white">{pack.title}</h4>
                    <span className="text-sm font-semibold text-aurora">{pack.price}</span>
                  </div>
                  <p className="text-sm text-slate-300">{pack.description}</p>
                  <a
                    href={PAYPAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
                  >
                    Encargar
                  </a>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">Incluye ticket en Discord tras la compra</p>
                </div>
              </motion.article>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  )
}
