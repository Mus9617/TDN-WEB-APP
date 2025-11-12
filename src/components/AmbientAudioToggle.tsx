interface AmbientAudioToggleProps {
  enabled: boolean
  onToggle: () => void
}

export function AmbientAudioToggle({ enabled, onToggle }: AmbientAudioToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
        enabled ? 'border-ember text-ember' : 'border-white/20 text-white/60 hover:text-white'
      }`}
      aria-pressed={enabled}
    >
      Sonido: {enabled ? 'ON' : 'OFF'}
    </button>
  )
}
