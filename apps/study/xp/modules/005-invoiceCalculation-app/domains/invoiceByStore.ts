type bodyLines = string[][] | undefined
type store = string[] | undefined

export const invoiceByStore = (bodyLines: bodyLines, store: store) => {
  if (!bodyLines || !store) {
    return {
      totalByStore: 0
    }
  }

  let total = 0

  for (let i = 0; i < bodyLines.length; i++) {
    const storeNameParts = bodyLines[i][1].split(' ')

    for (const storeNamePart of storeNameParts) {
      const storeName = storeNamePart.toLowerCase()

      if (store.includes(storeName)) {
        const value = parseFloat(bodyLines[i][3].replace(',', '.'))

        total += value
        break
      }
    }
  }

  return {
    totalByStore: total.toFixed(2)
  }
}
