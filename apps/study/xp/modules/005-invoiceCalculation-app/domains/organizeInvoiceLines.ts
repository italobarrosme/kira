import { invoiceLine } from './invoiceLine'

type Invoice = string

export const organizeInvoiceLines = (invoice: Invoice) => {
  const allLines = invoice.split('\n')

  const topLine = invoiceLine({ invoice: allLines, splitParam: ';', line: 0 })

  const bodyLines = allLines
    .filter((_, index) => index > 0)
    .map((_, index) => {
      return invoiceLine({
        invoice: allLines,
        splitParam: ';',
        line: index + 1
      })
    })

  return {
    allLines,
    topLine,
    bodyLines
  }
}
