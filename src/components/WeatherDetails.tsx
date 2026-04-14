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

interface WeatherDetailsProps {
  weather: Weather
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  const details = [
    { label: 'Humidity', value: `${Math.round(weather.humidity)}%`, icon: '💧' },
    { label: 'Wind Speed', value: `${weather.windSpeed} m/s`, icon: '💨' },
    { label: 'Feels Like', value: `${Math.round(weather.feelsLike)}°C`, icon: '🌡️' },
    { label: 'Condition', value: weather.condition, icon: '☁️' },
    ...(weather.description ? [{ label: 'Description', value: weather.description, icon: '📝' }] : [])
  ]

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>Details</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem'
      }}>
        {details.map((detail) => (
          <div
            key={detail.label}
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{detail.icon}</span>
              <p style={{ color: '#666', fontSize: '0.875rem' }}>{detail.label}</p>
            </div>
            <p style={{ color: '#1a1a1a', fontWeight: 600 }}>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
