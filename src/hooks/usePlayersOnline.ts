import { useEffect, useMemo, useState } from 'react'

interface PlayersState {
  value: number | null
  updatedAt: number | null
}

const PLAYERS_ENDPOINT =
  import.meta.env.VITE_PLAYERS_ENDPOINT?.trim() || '/api/battlemetrics'

export function usePlayersOnline() {
  const [state, setState] = useState<PlayersState>({ value: null, updatedAt: null })

  const endpoint = useMemo(() => PLAYERS_ENDPOINT, [])

  useEffect(() => {
    let active = true
    let controller: AbortController | null = null

    const fetchPlayers = async () => {
      controller?.abort()
      controller = new AbortController()
      try {
        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) throw new Error('Request failed')
        const data = await response.json()
        if (active) {
          setState({
            value: typeof data.playersOnline === 'number' ? data.playersOnline : null,
            updatedAt: Date.now(),
          })
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
        if (active) {
          setState((prev) => ({ value: prev.value, updatedAt: prev.updatedAt }))
        }
      }
    }

    fetchPlayers()
    const interval = window.setInterval(fetchPlayers, 20000)

    return () => {
      active = false
      controller?.abort()
      window.clearInterval(interval)
    }
  }, [endpoint])

  return state
}
