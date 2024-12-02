declare global {
  interface Window {
    QRious: typeof QRious
    confetti: typeof confetti
    dayjs: typeof dayjs
    dayjs_plugin_utc: typeof dayjs_plugin_utc
  }
}

export {}
