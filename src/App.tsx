import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import Forecast from './components/Forecast'

interface Weather {
  city: string
  country: string
  temperature: number
  feelsLike: number
  condition: string
  description?: string
  humidity: number
  windSpeed: number
}

const defaultWeather: Weather = {
  city: 'London',
  country: 'GB',
  temperature: 15,
  feelsLike: 13,
  condition: 'Cloudy',
  description: 'Overcast clouds',
  humidity: 72,
  windSpeed: 8,
}

const API_BASE_URL = 'http://localhost:4545'

export default function App() {
  const [weather, setWeather] = useState<Weather>(defaultWeather)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${API_BASE_URL}/weather?city=${encodeURIComponent(query)}`)
      
      console.log('Response status:', response.status)
      console.log('Response headers:', {
        'content-type': response.headers.get('content-type'),
        'content-length': response.headers.get('content-length')
      })

      if (!response.ok) {
        const errorData = await response.json() as { error?: string }
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json() as Weather
      console.log('Received data:', data)
      
      if (!data || !data.city) {
        throw new Error('Invalid response data: missing city field')
      }
      
      setWeather(data)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to fetch weather data'
      setError(errorMsg)
      console.error('Error fetching weather:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      <header>
        <div className="container">
          <h1>Weather</h1>
          <SearchBar onSearch={handleSearch} />
          {error && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#fee',
              color: '#c33',
              borderRadius: '4px',
              border: '1px solid #fcc'
            }}>
              {error}
            </div>
          )}
          {loading && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#efe',
              color: '#3c3',
              borderRadius: '4px',
              border: '1px solid #cfc'
            }}>
              Loading weather data...
            </div>
          )}
        </div>
      </header>

      <main>
        <div className="container">
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
          <Forecast />
        </div>
      </main>

      <footer>
        <div className="container">
          <p>Weather data updates every hour</p>
        </div>
      </footer>
    </div>
  )
}