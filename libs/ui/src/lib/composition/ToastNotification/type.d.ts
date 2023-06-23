export type Toast = {
  id?: string
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  position:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'center-bottom'
    | 'center-top'
  timeout: number
}
