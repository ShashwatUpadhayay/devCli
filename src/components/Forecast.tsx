import WeatherIcon from './WeatherIcon'

interface ForecastDay {
  day: string
  date: string
  high: number
  low: number
  condition: string
  precipitation: number
}

export default function Forecast() {
  const forecast: ForecastDay[] = [
    {
      day: 'Monday',
      date: 'Apr 15',
      high: 24,
      low: 18,
      condition: 'Partly Cloudy',
      precipitation: 10
    },
    {
      day: 'Tuesday',
      date: 'Apr 16',
      high: 26,
      low: 19,
      condition: 'Sunny',
      precipitation: 0
    },
    {
      day: 'Wednesday',
      date: 'Apr 17',
      high: 23,
      low: 17,
      condition: 'Rainy',
      precipitation: 40
    },
    {
      day: 'Thursday',
      date: 'Apr 18',
      high: 22,
      low: 16,
      condition: 'Cloudy',
      precipitation: 20
    },
    {
      day: 'Friday',
      date: 'Apr 19',
      high: 25,
      low: 18,
      condition: 'Sunny',
      precipitation: 5
    }
  ]

  return (
    <div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>5-Day Forecast</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {forecast.map((day) => (
          <div
            key={day.day}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f9f9f9',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
          >
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 600 }}>{day.day}</p>
              <p style={{ fontSize: '0.875rem', color: '#666' }}>{day.date}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <WeatherIcon condition={day.condition} size="md" />
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>{day.condition}</p>
                <p style={{ fontSize: '0.75rem', color: '#999' }}>
                  {day.high}° / {day.low}°
                </p>
              </div>
            </div>

            <div style={{ width: '4rem', textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#0066cc' }}>{day.precipitation}%</p>
              <p style={{ fontSize: '0.75rem', color: '#666' }}>rain</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
