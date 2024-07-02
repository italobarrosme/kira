/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type card = {
  id: string | number
  title: string
  link?: string
  image?: string
  description?: string
}

export type GridCardsProps = {
  cards: card[]
}

export const GridCards = ({ cards }: GridCardsProps) => {
  const [positions, setPositions] = useState<{
    [key: string]: { x: number; y: number }
  }>({})

  const randomScreen = (circles: card[]) => {
    setPositions((prevPositions) => {
      const newPositions: { [key: string]: { x: number; y: number } } = {}
      const circleSize = 32 * circles.length

      circles.forEach((circle) => {
        const maxX = window.innerWidth - circleSize
        const maxY = window.innerHeight - circleSize

        let randomX = Math.random() * maxX
        let randomY = Math.random() * maxY

        if (prevPositions[circle.id]) {
          randomX = Math.min(randomX, maxX - prevPositions[circle.id].x)
          randomY = Math.min(randomY, maxY - prevPositions[circle.id].y)
        }

        const finalX = Math.max(randomX, 0)
        const finalY = Math.max(randomY, 0)

        newPositions[circle.id] = { x: finalX, y: finalY }
      })

      return { ...prevPositions, ...newPositions }
    })
  }

  useEffect(() => {
    randomScreen(cards)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      randomScreen(cards)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {cards.map((card) => (
        <motion.a
          key={card.id}
          href={card.link}
          className="bg-brand-light backdrop-filter backdrop-brightness-110 rounded-full h-1 w-1 p-2 cursor-pointer group/card flex justify-center items-center grid-card relative"
          animate={positions[card.id]}
          transition={{ duration: 2 }}
        >
          <span className="group-hover/card:block lg:hidden text-brand-light text-xs font-bold ease-in-out text-left absolute left-7 w-24">
            {card.title}
          </span>
        </motion.a>
      ))}
    </>
  )
}
