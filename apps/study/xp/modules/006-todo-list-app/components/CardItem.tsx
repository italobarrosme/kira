import { Button } from '@kira/ui'
import { Plan } from '../type'

type CardItemProps = {
  item: Plan
  removeItem?: (id: string) => void
  markItem?: (id: string) => void
}

export const CardItem = ({ item, removeItem, markItem }: CardItemProps) => {
  return (
    <div className="bg-primary-300 p-4 rounded-md mb-4 relative">
      <div className="absolute right-2 top-2 text-xs font-semibold">
        <p>{item.date}</p>
      </div>
      <h1 className="text-4xl font-bold my-4">{item.title}</h1>
      <p className="text-sm my-4 h-14 bg-secondary-500 text-primary-100 p-4 rounded-md">
        {item.description}
      </p>
      <p className="font-bold text-accent-200 my-4">#{item.category}</p>
      <form className="flex gap-2">
        {removeItem ? (
          <Button
            label="deletar"
            onClick={() => {
              removeItem(item.id)
            }}
          ></Button>
        ) : null}
        {markItem ? (
          <Button
            label="Marcar"
            onClick={() => {
              markItem(item.id)
            }}
          ></Button>
        ) : null}
      </form>
    </div>
  )
}
