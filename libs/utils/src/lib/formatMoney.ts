type formatMoneyProps = {
  value: number
  currency: string
  locale: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
}
export const formatMoney = ({
  value,
  currency,
  locale,
  minimumFractionDigits,
  maximumFractionDigits
}: formatMoneyProps) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits
  })

  // example: formatter.format(1000) -> $1,000.00

  return formatter.format(value)
}
