import { InputSearch, useSearch } from '@kira/ui'
import { Icon } from '@iconify/react'
import { useVerifyWeatherData } from '../hooks/useVerifyWeatherData'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const WeatherApp = () => {
  const { search, handlerSearch } = useSearch()

  const { weather, error } = useVerifyWeatherData(search)

  return (
    <>
      <div className="py-4 flex justify-center items-center gap-4 text-secondary-500 font-bold text-3xl">
        <Icon icon="ph:cloud-fog" width={32} />
        <h1>Weather App</h1>
      </div>

      <motion.div
        animate={{
          height: weather ? 360 : 70
        }}
        variants={{
          open: {},
          closed: {
            height: 400
          }
        }}
        transition={{ duration: 0.2 }}
        className="mx-auto w-80 bg-secondary-400 rounded-xl p-4 font-poppins"
      >
        <div className="flex gap-4 text-secondary-100 justify-between items-center">
          <div className="w-2">
            <Icon
              icon="ph:map-pin-fill"
              width={32}
              className="mx-auto text-primary-100"
            />
          </div>
          <InputSearch
            placeholder="Enter your location"
            id={'input-search'}
            icon=""
            onChange={(ev) => handlerSearch(ev)}
          />
        </div>

        <div className="text-secondary-100 flex gap-4 justify-center items-start p-1">
          {weather ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 flex flex-col justify-center items-center gap-4 anim"
            >
              <Image
                alt={weather.type}
                src={`/weather-app/${weather.type}.png`}
                width={100}
                height={100}
              />
              <div>
                <h1 className="font-bold text-2xl">{weather.temperature}°</h1>
                <h2 className="font-bold">{weather.type}</h2>
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Icon icon="carbon:humidity-alt" width={32} />
                  <div>
                    <h1 className="font-bold">{weather.humidity}%</h1>
                    <h2 className="text-sm">Humidity</h2>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="ph:wind-light" width={32} />
                  <div>
                    <h1 className="font-bold">{weather.windSpeed}km/h</h1>
                    <h2 className="text-sm">Wind Speed</h2>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}

          {error ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col py-4 justify-between items-center"
              >
                <h1 className="font-bold">Ops! Invalid location</h1>
                <Image
                  src="./weather-app/location_search.svg"
                  width={220}
                  height={220}
                  alt="location search"
                  className="p-4"
                />
              </motion.div>
            </>
          ) : null}
        </div>
      </motion.div>
    </>
  )
}
