declare module 'vanta/dist/vanta.fog.min' {
  interface VantaBaseOptions {
    el: HTMLElement
    THREE: typeof import('three')
  }

  interface VantaFogOptions extends VantaBaseOptions {
    highlightColor?: number
    midtoneColor?: number
    lowlightColor?: number
    baseColor?: number
    backgroundAlpha?: number
    blurFactor?: number
    speed?: number
    zoom?: number
  }

  type VantaEffect = {
    destroy?: () => void
  }

  export default function VantaFog(options: VantaFogOptions): VantaEffect
}
