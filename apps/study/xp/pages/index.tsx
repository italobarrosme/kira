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
      link: '/002-HitNumber'
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
        <div className="flex flex-wrap w-full gap-4">
          <GridCards cards={apps} />
        </div>
      </DefaultLayout>
    </>
  )
}

export default Index
