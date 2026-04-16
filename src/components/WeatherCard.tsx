import WeatherIcon from './WeatherIcon'

interface Weather {
  city: string
  country: string
  temperature: number
  feelsLike: number
  condition: string
  humidity: number
  windSpeed: number
}

interface WeatherCardProps {
  weather: Weather
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div style={{
      backgroundColor: '#f0f8ff',
      border: '1px solid #cce5ff',
      borderRadius: '8px',
      padding: '2rem',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.5rem'
      }}>
        <div>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
            {weather.city}, {weather.country}
          </h2>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Today</p>
        </div>
        <WeatherIcon condition={weather.condition} size="lg" />
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
        <span style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
          {Math.round(weather.temperature)}°
        </span>
        <div>
          <p style={{ fontSize: '1.25rem' }}>{weather.condition}</p>
          <p style={{ color: '#666' }}>Feels like {Math.round(weather.feelsLike)}°</p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #cce5ff'
      }}>
        <div>
          <p style={{ color: '#666', fontSize: '0.875rem' }}>Humidity</p>
          <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>{weather.humidity}%</p>
        </div>
        <div>
          <p style={{ color: '#666', fontSize: '0.875rem' }}>Wind</p>
          <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>{weather.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  )
}
