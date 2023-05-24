import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react'

export const useQrcode = () => {
  const [text, setText] = useState('')
  const viewQRCode = useRef(null) as RefObject<HTMLCanvasElement>

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const donwloadQRCode = () => {
    const canvas = viewQRCode.current

    if (!canvas) {
      return
    }

    const image = canvas.toDataURL('image/png')
    const link = document.createElement('a')

    link.download = 'qrcode.png'
    link.href = image
    link.click()
  }

  useEffect(() => {
    new window.QRious({
      element: viewQRCode.current,
      value: text,
      size: 200
    })
  }, [text])

  return {
    text,
    viewQRCode,
    handleChange,
    donwloadQRCode
  }
}
