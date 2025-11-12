# Tierra de Nadie DayZ

![Tierra de Nadie Logo](src/assets/logo.png)

Landing page para el servidor hispano de DayZ *Tierra de Nadie*. Construida con Vite + React + Tailwind para ofrecer una experiencia inmersiva con vídeo de fondo, música ambiental y secciones diferenciadas (inicio, zonas, arsenal, donaciones e intel del staff).

## Scripts disponibles

```bash
npm install        # instala dependencias
npm run dev        # levanta el entorno de desarrollo
npm run build      # genera el build de producción
npm run preview    # sirve el build generado
```

## Estructura destacada

- `src/App.tsx` — layout principal, navegación por rutas y control del audio.
- `src/components/` — componentes reutilizables (intro overlay, fondo en vídeo, toggle de sonido, etc.).
- `src/pages/` — secciones temáticas (Home, Zonas, Arsenal, Donaciones, Intel).
- `src/assets/media/` — tráiler MP4 y música de fondo MP3.

## Requisitos

- Node.js 18+ recomendado.
- Navegador moderno con soporte para video MP4 y reproducción de audio controlada por usuario.
