import { invoiceByStore } from './invoiceByStore'
import { itemsMock } from './mock'

describe('invoiceByStore', () => {
  it('should return 0 when no items are passed', () => {
    const items = undefined
    const result = invoiceByStore(items, ['store'])

    expect(result.totalByStore).toBe(0)
  })

  it('should error `Essa loja não existe na fatura!` when no items are passed', () => {
    const items = itemsMock
    const result = invoiceByStore(items, undefined)

    expect(result.errorByStore).toBe('Essa loja não existe na fatura!')
  })

  it('should return sum of items when store is passed', () => {
    const items = itemsMock
    const result = invoiceByStore(items, ['uber'])

    expect(result.totalByStore).toBe('23.89')
  })

  it('should return sum of more than one store when store is passed', () => {
    const items = itemsMock
    const result = invoiceByStore(items, ['uber', 'ifood'])

    expect(result.totalByStore).toBe('64.75')
  })
})
