# Tierra de Nadie DayZ

![Tierra de Nadie Logo](src/assets/logo.png)

Landing page para el servidor hispano de DayZ *Tierra de Nadie*. Construida con Vite + React + Tailwind para crear una experiencia inmersiva con vídeo de fondo, música ambiental y secciones diferenciadas (inicio, zonas, arsenal, donaciones e intel del staff).

## Datos en vivo (BattleMetrics)

La ruta `/api/battlemetrics` consulta el servidor a través de la API oficial de [BattleMetrics](https://www.battlemetrics.com/servers/dayz/35790626). Para que funcione en Vercel necesitas definir estos valores en las variables de entorno del proyecto:

| Variable       | Descripción                                     | Ejemplo                            |
| -------------- | ----------------------------------------------- | ---------------------------------- |
| `BM_TOKEN`     | Token personal de BattleMetrics (Bearer token)  | `eyJhbGc...`                       |
| `BM_SERVER_ID` | (Opcional) ID del servidor en BattleMetrics     | `35790626`                         |
| `VITE_PLAYERS_ENDPOINT` | Opcional, sólo si usas un backend externo | `https://tu-backend/players` |

El hook `usePlayersOnline` hará polling cada 20 s a `VITE_PLAYERS_ENDPOINT` si está definido; en caso contrario utilizará `/api/battlemetrics`.

## Scripts disponibles

```bash
npm install        # instala dependencias
npm run dev        # entorno de desarrollo
npm run build      # genera el build de producción
npm run preview    # sirve el build generado localmente
```

## Estructura destacada

- `src/App.tsx` – layout principal, overlay de bienvenida y control del audio.
- `src/components/` – reusable (fondo en vídeo, toggle de sonido, intro, etc.).
- `src/pages/` – secciones temáticas (Home, Zonas, Arsenal, Donaciones, Intel).
- `src/hooks/usePlayersOnline.ts` – hook que consulta `/api/players` cada 20 s.
- `src/assets/media/` – tráiler MP4 y música MP3 utilizados en el background.

## Requisitos

- Node.js 18+ (recomendado).
- Navegador moderno con soporte MP4 y autoplay de audio tras interacción.
