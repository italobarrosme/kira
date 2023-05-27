const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY_API

export const getWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
  const data = await response.json()

  return data
}
