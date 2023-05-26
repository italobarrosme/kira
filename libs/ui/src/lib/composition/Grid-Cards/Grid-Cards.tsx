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

  const randomScreen = (cubes: card[]) => {
    setPositions((prevPositions) => {
      const newPositions: { [key: string]: { x: number; y: number } } = {}
      const cubeSize = 128 * cubes.length

      cubes.forEach((cube) => {
        const maxX = window.innerWidth - cubeSize
        const maxY = window.innerHeight - cubeSize

        let randomX = Math.random() * maxX
        let randomY = Math.random() * maxY

        if (prevPositions[cube.id]) {
          randomX = Math.min(randomX, maxX - prevPositions[cube.id].x)
          randomY = Math.min(randomY, maxY - prevPositions[cube.id].y)
        }

        const finalX = Math.max(randomX, 0)
        const finalY = Math.max(randomY, 0)

        newPositions[cube.id] = { x: finalX, y: finalY }
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
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {cards.map((card) => (
        <motion.a
          key={card.id}
          href={card.link}
          className="bg-primary-400 rounded-sm h-32 w-32 p-4 cursor-pointer group/card flex justify-center items-center grid-card"
          animate={positions[card.id]}
          transition={{ duration: 2 }}
        >
          <span className="group-hover/card:block lg:hidden text-primary-100 text-xs ease-in-out text-center">
            {card.title}
          </span>
        </motion.a>
      ))}
    </>
  )
}
