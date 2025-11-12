import type { VercelRequest, VercelResponse } from '@vercel/node'
import Gamedig from 'gamedig'

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const data = await Gamedig.query({
      type: 'dayz',
      host: '5.9.151.150',
      port: 2402,
    })

    res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate=30')
    res.status(200).json({
      playersOnline: data.players.length,
      maxPlayers: data.maxplayers,
      ping: data.ping,
    })
  } catch (error) {
    console.error('Failed to query DayZ server', error)
    res.status(503).json({ playersOnline: null })
  }
}
