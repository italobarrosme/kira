/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

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
    const newPositions: { [key: string]: { x: number; y: number } } = {}

    cubes.forEach((cube) => {
      const randomX = Math.random() * (window.innerWidth - 600)
      const randomY = Math.random() * (window.innerHeight - 500)

      console.log(randomX, randomY, 'positions')
      console.log('size screen', window.innerWidth, window.innerHeight)

      newPositions[cube.id] = { x: randomX, y: randomY }
    })

    setPositions(newPositions)
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
          <span className="group-hover/card:block hidden text-primary-100 text-xs ease-in-out text-center">
            {card.title}
          </span>
        </motion.a>
      ))}
    </>
  )
}
