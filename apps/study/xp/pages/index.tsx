import { Icon } from '@iconify/react'
import Link from 'next/link'

export function Index() {
  return (
    <>
      <aside className="w-full py-4 sm:w-60 bg-secondary-100 text-primary-200 h-screen dark">
        <nav className="text-sm">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="px-4 text-2xl font-semibold tracking-widest uppercase text-primary-200">
              Estudos
            </h2>
            <div className="flex flex-col justify-between w-full">
              <Link
                href="/001-qrcode"
                className="p-4 flex items-center justify-between hover:bg-primary-300 hover:text-secondary-100"
              >
                001 - Gerador de QRCODE
                <Icon width={24} icon="material-symbols:arrow-circle-right" />
              </Link>
              <Link
                href="/002-hitNumber"
                className="p-4 flex items-center justify-between hover:bg-primary-300 hover:text-secondary-100"
              >
                002 - Acerte o número
                <Icon width={24} icon="material-symbols:arrow-circle-right" />
              </Link>
              <Link
                href="/003-cronus"
                className="p-4 flex items-center justify-between hover:bg-primary-300 hover:text-secondary-100"
              >
                003 - Cronus
                <Icon width={24} icon="material-symbols:arrow-circle-right" />
              </Link>
              <Link
                href="/004-weather-app"
                className="p-4 flex items-center justify-between hover:bg-primary-300 hover:text-secondary-100"
              >
                004 - Weather App
                <Icon width={24} icon="material-symbols:arrow-circle-right" />
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Index
