import { useEffect, useState } from 'react'
import { getWeather } from '..'

export type Weather = {
  humidity: number
  windSpeed: number
  temperature: number
  type: string
}

export const useVerifyWeatherData = (city: string) => {
  const [weather, setWeather] = useState<Weather>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    const fetchWeather = async () => {
      await getWeather(city)
        .then((data) => {
          const weather = {
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature: Math.round(data.main.temp - 273.15), // Convert from Kelvin to Celsius,
            type: data.weather[0].main
          }
          // remove data alter
          setWeather(weather)
          setError(undefined)
        })
        .catch((error) => {
          setError(error.message)
        })
    }

    if (city.length > 0) {
      fetchWeather()
    } else {
      setWeather(undefined)
      setError(undefined)
    }
  }, [city])

  return { weather, error }
}
