interface WeatherIconProps {
  condition: string
  size?: 'sm' | 'md' | 'lg'
}

export default function WeatherIcon({ condition, size = 'md' }: WeatherIconProps) {
  const getIcon = () => {
    const cond = condition.toLowerCase()
    
    if (cond.includes('sunny') || cond.includes('clear')) return '☀️'
    if (cond.includes('cloudy')) return '☁️'
    if (cond.includes('rainy') || cond.includes('rain')) return '🌧️'
    if (cond.includes('snow')) return '❄️'
    if (cond.includes('thunderstorm')) return '⛈️'
    if (cond.includes('wind')) return '💨'
    if (cond.includes('fog') || cond.includes('mist')) return '🌫️'
    if (cond.includes('partly')) return '⛅'
    
    return '🌤️'
  }

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  }

  return <span className={sizeClasses[size]}>{getIcon()}</span>
}
