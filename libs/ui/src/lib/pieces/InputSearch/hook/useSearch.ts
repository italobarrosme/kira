import { ChangeEvent, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState<string>('')
  let timerId: NodeJS.Timeout

  const handlerSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      setSearch(value)
    }, 700)
  }

  return { search, handlerSearch }
}
