import type { VercelRequest, VercelResponse } from '@vercel/node'
import Gamedig from 'gamedig'
const DEFAULT_HOST = '5.9.151.150'
const DEFAULT_QUERY_PORT = 27017
export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const host = process.env.DAYZ_HOST ?? DEFAULT_HOST
  const port = Number(process.env.DAYZ_QUERY_PORT ?? DEFAULT_QUERY_PORT)
  try {
    const data = await Gamedig.query({
      type: 'dayz',
      host,
      port,
    })
    res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate=30')
    res.status(200).json({
      playersOnline: data.players.length,
      maxPlayers: data.maxplayers,
      ping: data.ping,
      name: data.name,
    })
  } catch (error) {
    console.error('Failed to query DayZ server', error)
    res.status(503).json({ playersOnline: null, error: 'unreachable' })
  }
}