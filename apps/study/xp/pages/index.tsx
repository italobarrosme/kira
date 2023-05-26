import { DefaultLayout } from '../layouts'
import { GridCards } from '@kira/ui'

export function Index() {
  const apps = [
    {
      id: 1,
      title: 'Qrcode',
      link: '/001-qrcode'
    },
    {
      id: 2,
      title: 'Acerte o número',
      link: '/002-hitNumber'
    },
    {
      id: 3,
      title: 'Cronus',
      link: '/003-cronus'
    },
    {
      id: 4,
      title: 'Weather',
      link: '/004-weather-app'
    }
  ]

  return (
    <>
      <DefaultLayout title="XP">
        <div className="sm:flex w-screen h-screen gap-4">
          <h1 className="absolute top-[40%]">
            <span className="text-4xl font-bold">XP - Projects</span>
          </h1>
          <GridCards cards={apps} />
        </div>
      </DefaultLayout>
    </>
  )
}

export default Index
