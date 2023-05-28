type bodyLines = string[][] | undefined

export const invoiceTotal = (bodyLines: bodyLines) => {
  if (!bodyLines) {
    return {
      total: 0
    }
  }

  let total = 0

  for (let i = 0; i < bodyLines.length; i++) {
    const value = parseFloat(bodyLines[i][3].replace(',', '.'))

    total += value
  }

  return {
    total: total.toFixed(2)
  }
}
