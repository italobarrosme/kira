import { Button } from '@kira/ui'
import { Plan } from '../type'
import clsx from 'clsx'

type CardItemProps = {
  item: Plan
  removeItem?: (id: string) => void
  markItem?: (id: string) => void
}

export const CardItem = ({ item, removeItem, markItem }: CardItemProps) => {
  return (
    <div
      className={clsx(
        'p-4 rounded-md mb-4 relative',
        item.isCompleted ? 'bg-green-500' : 'bg-primary-300'
      )}
    >
      <div className="absolute left-4 top-3 text-xs font-semibold">
        <p>{item.date}</p>
      </div>
      <div className="absolute right-3 top-2 text-xs font-semibold">
        {markItem ? (
          <Button
            label=""
            icon={
              item.isCompleted
                ? 'mdi:checkbox-marked'
                : 'mdi:checkbox-blank-outline'
            }
            onClick={() => {
              markItem(item.id)
            }}
            className="w-16 h-10 
            bg-transparent 
            hover:bg-transparent 
            outline-none 
            focus:outline-none 
            hover:border-none m-0 px-0 py-0"
          ></Button>
        ) : null}
      </div>
      <h1 className="text-2xl font-bold mt-9 mb-4">{item.title}</h1>
      <p className="text-sm h-14 bg-secondary-500 text-primary-100 p-2 rounded-sm">
        {item.description}
      </p>
      <p className="font-bold text-accent-200 my-4 italic">#{item.category}</p>
      <div className="flex gap-2">
        {removeItem ? (
          <Button
            label="deletar"
            onClick={() => {
              removeItem(item.id)
            }}
          ></Button>
        ) : null}
      </div>
    </div>
  )
}
