# Tierra de Nadie DayZ

![Tierra de Nadie Logo](src/assets/logo.png)

Landing page para el servidor hispano de DayZ *Tierra de Nadie*. Construida con Vite + React + Tailwind para crear una experiencia inmersiva con vídeo de fondo, música ambiental y secciones diferenciadas (inicio, zonas, arsenal, donaciones e intel del staff).

## Backend externo (Fly.io)

El contador de jugadores consulta un endpoint HTTP que expone los datos mediante [gamedig](https://github.com/gamedig/node-gamedig). Para evitar las limitaciones de Vercel (sin soporte UDP) se incluyó una carpeta `server/` lista para desplegar en Fly.io (o cualquier hosting Node):

1. Dentro de `server/`:
   ```bash
   cd server
   npm install
   ```
2. Crea un *Fly app* (`fly launch`) o usa tu PaaS preferido.
3. Define los secretos:
   ```bash
   fly secrets set DAYZ_HOST=5.9.151.150 DAYZ_QUERY_PORT=27017
   ```
4. Despliega (`fly deploy`). El servicio expone `/players` y `/health`.

En el frontend (Vercel), define `VITE_PLAYERS_ENDPOINT=https://tu-app.fly.dev/players`. Si no lo defines, el hook seguirá usando `/api/players` como fallback (sólo útil cuando existe la función serverless).

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
