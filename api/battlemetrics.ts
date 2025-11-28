import type { VercelRequest, VercelResponse } from '@vercel/node'

const DEFAULT_SERVER_ID = '35790626'

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const token = process.env.BM_TOKEN
  const serverId = process.env.BM_SERVER_ID ?? DEFAULT_SERVER_ID

  if (!token) {
    res.status(500).json({ error: 'BM_TOKEN is not configured' })
    return
  }

  try {
    const response = await fetch(`https://api.battlemetrics.com/servers/${serverId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`BattleMetrics responded ${response.status}`)
    }

    const payload = await response.json()
    const attrs = payload?.data?.attributes

    res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate=30')
    res.status(200).json({
      playersOnline: attrs?.players ?? null,
      maxPlayers: attrs?.maxPlayers ?? null,
      name: attrs?.name ?? '',
      map: attrs?.details?.map ?? '',
      ip: attrs?.ip ?? '',
      port: attrs?.port ?? '',
    })
  } catch (error) {
    console.error('BattleMetrics API error', error)
    res.status(503).json({ playersOnline: null, error: 'unreachable' })
  }
}
