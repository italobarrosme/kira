import { generateId } from '@kira/utils'
import { create } from 'zustand'
import { Toast } from '../type'

type ToastNotificationState = {
  notifications: Toast[]
  addNotification: (toast: Toast) => void
  removeNotification: (id: string | undefined) => void
}

export const storeToastNotificationStore = create<ToastNotificationState>(
  (set) => ({
    notifications: [],
    addNotification: (notification) =>
      set((state) => {
        const { notifications } = state
        const { id, ...rest } = notification
        const newToast = {
          id: generateId(5),
          ...rest
        }

        setTimeout(() => {
          console.log('remove notification', newToast)
          set((state) => {
            const notifications = state.notifications.filter(
              (notification) => notification.id !== newToast.id
            )
            return { notifications }
          })
        }, notification.timeout)

        return { notifications: [...notifications, newToast] }
      }),
    removeNotification: (id: string | undefined) =>
      set((state) => {
        if (!id) return state

        const notifications = state.notifications.filter(
          (notification) => notification.id !== id
        )
        return { notifications }
      })
  })
)
