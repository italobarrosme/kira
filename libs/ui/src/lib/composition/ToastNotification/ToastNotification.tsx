import { cn } from '@kira/utils'
import { useToastNotification } from './hook'
import { Icon } from '@iconify/react'

export const ToastNotification = () => {
  const { notifications, removeNotification, orientation, type } =
    useToastNotification()

  return (
    <div>
      {notifications.length > 0
        ? notifications.map((item) => (
            <div
              key={item.id}
              className={cn(
                'absolute z-50 w-80 h-20 rounded-md p-2 text-primary-200',
                orientation(item.position),
                type(item.type)
              )}
            >
              <div className="flex justify-between">
                <h1 className="text-md drop-shadow-md font-bold tracking-wide">
                  {item.title}
                </h1>
                <button onClick={() => removeNotification(item.id)}>
                  <Icon icon={'mdi:close'} className="text-md" />
                </button>
              </div>
              <div>
                <p className="text-sm drop-shadow-md">{item.message}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}
