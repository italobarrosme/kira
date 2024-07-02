import { invoiceLine } from './invoiceLine'
import { itemsLineMock } from './mock'

describe('invoiceLine', () => {
  it('should return an array of strings when a string is passed', () => {
    const invoice = itemsLineMock
    const result = invoiceLine({ invoice, splitParam: ';', line: 0 })

    expect(result).toEqual(['19/05/2023', 'Uber   *uber   *trip', '', '5,63'])
  })
})
