import { invoiceTotal } from '../domains/invoiceTotal'
import { invoiceByStore } from '../domains/invoiceByStore'
import { organizeInvoiceLines } from '../domains/organizeInvoiceLines'

type Invoice = string

type Filter = {
  store: string[] | undefined
}

export const useInvoiceReview = (invoice: Invoice, filter: Filter) => {
  const newInvoice = invoice.trim()
  const { bodyLines } = organizeInvoiceLines(newInvoice)
  const { total } = invoiceTotal(bodyLines)

  if (!filter) {
    return {
      invoiceByStoreResult: 0,
      invoiceTotalResult: Number(total)
    }
  }

  const { totalByStore, errorByStore } = invoiceByStore(
    bodyLines,
    filter['store']
  )

  const invoiceTotalResult = Number(total)
  const invoiceByStoreResult = Number(totalByStore)

  return {
    errorByStore,
    invoiceTotalResult,
    invoiceByStoreResult
  }
}
