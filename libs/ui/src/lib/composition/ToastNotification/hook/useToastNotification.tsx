import { storeToastNotificationStore } from '../store'

export const useToastNotification = () => {
  const { addNotification, notifications, removeNotification } =
    storeToastNotificationStore()

  const orientation = (position: string) => {
    const positionMap: { [key: string]: string } = {
      'top-left': 'top-2 left-2',
      'top-right': 'top-2 right-2',
      'bottom-left': 'bottom-2 left-2',
      'bottom-right': 'bottom-2 right-2',
      'center-bottom': 'bottom-2 left-1/2 transform -translate-x-1/2',
      'center-top': 'top-2 left-1/2 transform -translate-x-1/2'
    }
    const positionStyle = positionMap[position] || 'top-1 right-1'

    return positionStyle
  }

  const type = (type: string) => {
    const typeMap: { [key: string]: string } = {
      success: 'bg-green-400',
      warning: 'bg-yellow-400',
      error: 'bg-red-400',
      info: 'bg-blue-400'
    }
    const typeStyle = typeMap[type] || 'bg-green-500'

    return typeStyle
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    orientation,
    type
  }
}
