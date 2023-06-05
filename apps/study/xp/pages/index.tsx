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
      link: '/004-weather'
    },
    {
      id: 5,
      title: 'Invoice Calculation',
      link: '/005-invoice-calculation'
    }
  ]

  return (
    <>
      <div className="sm:flex w-screen h-screen gap-4 bg-black p-9">
        <h1 className="absolute top-[40%]">
          <span className="text-4xl font-bold text-primary-200">
            XP - Projects
          </span>
        </h1>
        <GridCards cards={apps} />
      </div>
    </>
  )
}

export default Index
