import { useState, ChangeEvent, useEffect } from 'react'

export const useInputFile = () => {
  const [file, setFile] = useState<File | null>()
  const [preview, setPreview] = useState<string | ArrayBuffer | null>()

  const handlerChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files) {
      setFile(ev.target.files[0])
    }
  }

  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [file])

  return {
    file,
    handlerChange,
    preview
  }
}
