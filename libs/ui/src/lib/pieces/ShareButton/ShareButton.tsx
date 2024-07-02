'use client'
import { Icon } from '@iconify/react'

type ShareButtonProps = {
  title: string
  text: string
  label: string
  icon?: string
  url?: string
}

type ShareData = Omit<ShareButtonProps, 'label' | 'icon'>

export const ShareButton = ({
  title,
  text,
  url,
  label = 'Compartilhar',
  icon = 'mdi:share-variant'
}: ShareButtonProps) => {
  const handleClick = async ({ title, text, url }: ShareData) => {
    try {
      await navigator.share({ title, text, url })
    } catch (error) {
      console.error('Error sharing', error)
    }
  }

  return (
    <button
      className="font-bold flex gap-4 items-center cursor-pointer bg-secondary-100 text-white rounded-md px-2 py-1"
      onClick={() =>
        handleClick({
          title,
          text,
          url
        })
      }
    >
      {label} <Icon icon={icon} />
    </button>
  )
}
