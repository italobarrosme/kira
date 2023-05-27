import { useEffect, useState } from 'react'

type filter = {
  store: string[] | undefined
}

type handleFilterProps = {
  type: keyof filter
  value: string
}

export const useSearchFilter = ({ type, value }: handleFilterProps) => {
  const [filter, setFilter] = useState<filter>({ store: [] })

  const handleFilter = () => {
    const valueFormat = value.trim().toLowerCase()
    if (!valueFormat || valueFormat === '') {
      setFilter((prev) => {
        const newFilter = { ...prev }

        newFilter[type] = undefined

        return newFilter
      })
      return
    }

    setFilter((prev) => {
      const newFilter = { ...prev }

      newFilter[type] = valueFormat.split(' ')

      return newFilter
    })
  }

  useEffect(() => {
    handleFilter()
  }, [value])

  return {
    filter
  }
}
