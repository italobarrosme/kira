import { invoiceTotal } from './invoiceTotal'
import { itemsMock } from './mock'

const bodyLines = itemsMock

describe('invoiceTotal', () => {
  it('should return 0 when bodyLines is undefined', () => {
    const bodyLines = undefined
    const result = invoiceTotal(bodyLines)
    expect(result.total).toBe(0)
  })

  it('should return sum of all values when bodyLines is defined', () => {
    const result = invoiceTotal(bodyLines)
    expect(result.total).toBe('365.18')
  })

  it('should replace comma to dot', () => {
    const bodyLines = [['', '', '', '1,00']]
    const result = invoiceTotal(bodyLines)
    expect(result.total).toBe('1.00')
  })
})
