import { useState, useEffect } from 'react'

export const useScrollStatus = () => {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [percentageScroll, setPercentageScroll] = useState(0)
  const [pixelsScrolled, setPixelsScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const htmlElement = document.documentElement
      const { scrollHeight, clientHeight } = htmlElement

      const percentageScroll =
        (window.scrollY / (scrollHeight - clientHeight)) * 100

      const pixelsScrolled = window.scrollY

      setScrollHeight(scrollHeight)
      setClientHeight(clientHeight)
      setPercentageScroll(percentageScroll)
      setPixelsScrolled(pixelsScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    scrollHeight,
    clientHeight,
    percentageScroll,
    pixelsScrolled
  }
}
