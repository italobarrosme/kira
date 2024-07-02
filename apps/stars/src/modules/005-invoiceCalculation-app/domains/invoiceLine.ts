type InvoiceProps = {
  invoice: string[]
  splitParam: string
  line: number
}

export const invoiceLine = ({ invoice, splitParam, line }: InvoiceProps) => {
  const lineSplit = invoice[line].split(splitParam)

  return lineSplit
}
