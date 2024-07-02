import { useScrollStatus } from '../hooks'
import { cn } from '@kira/utils'
import { Title } from '@kira/ui'
import Image from 'next/image'

export const Checkpoint = () => {
  const { percentageScroll } = useScrollStatus()

  return (
    <div className="h-[2000px] w-full relative overflow-hidden bg-">
      <div
        className="w-screen h-screen absolute left-0"
        style={{
          left: `${-percentageScroll / 6}%`
        }}
      >
        <Image
          src="/scroll-animate-app/mountMg.webp"
          alt="mountain"
          className={cn('z-40')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div
        className="w-screen h-screen absolute right-0"
        style={{
          right: `${-percentageScroll / 6}%`
        }}
      >
        <Image
          src="/scroll-animate-app/mountFg.webp"
          alt="mountain"
          className={cn('z-40')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div
        className="w-screen h-screen absolute left-0"
        style={{
          top: `${percentageScroll / 2}%`
        }}
      >
        <Image
          src="/scroll-animate-app/mountBg.webp"
          alt="mountain"
          className={cn('z-30')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-screen h-screen absolute left-0 top-0">
        <Image
          src="/scroll-animate-app/cloud1.webp"
          alt="mountain"
          className={cn('z-50')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-screen h-screen absolute top-0 left-0">
        <Image
          src="/scroll-animate-app/cloud2.webp"
          alt="mountain"
          className={cn('z-40')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-screen h-screen absolute top-0 right-0">
        <Image
          src="/scroll-animate-app/cloud3.webp"
          alt="mountain"
          className={cn('z-40 opacity-50')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-screen h-screen absolute top-0 left-0">
        <Image
          src="/scroll-animate-app/sky.jpg"
          alt="mountain"
          className={cn('z-10')}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="z-40 w-full h-[57%] bg-white absolute bottom-0 flex justify-center p-8">
        <Title label="Scroll Animation app" className="text-black text-3xl" />
      </div>
      <p className="fixed right-0 bottom-0 text-black">{percentageScroll}</p>
    </div>
  )
}
