import express from 'express'
import cors from 'cors'
import Gamedig from 'gamedig'

const PORT = process.env.PORT || 8080
const HOST = process.env.DAYZ_HOST || '5.9.151.150'
const QUERY_PORT = Number(process.env.DAYZ_QUERY_PORT || 27017)

const app = express()
app.use(cors())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', host: HOST, queryPort: QUERY_PORT })
})

app.get('/players', async (_req, res) => {
  try {
    const data = await Gamedig.query({
      type: 'dayz',
      host: HOST,
      port: QUERY_PORT,
    })

    res.setHeader('Cache-Control', 'max-age=10, s-maxage=10')
    res.json({
      name: data.name,
      map: data.map,
      playersOnline: data.players.length,
      maxPlayers: data.maxplayers,
      ping: data.ping,
      host: HOST,
      queryPort: QUERY_PORT,
    })
  } catch (error) {
    console.error('Failed to query DayZ server', error)
    res.status(503).json({ playersOnline: null, error: 'unreachable' })
  }
})

app.listen(PORT, () => {
  console.log(`DayZ monitor listening on port ${PORT}`)
})
