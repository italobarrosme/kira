export const generateId = (length: number) => {
  return Math.random().toString(36).slice(2, length)
}
