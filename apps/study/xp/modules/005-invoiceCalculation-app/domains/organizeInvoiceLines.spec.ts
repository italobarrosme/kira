import { organizeInvoiceLines } from './organizeInvoiceLines'

const simpleMock = `Data da Transacao;Estabelecimento;Tipo da Transacao;Valor
01/06/2023;Internacional;Compra � vista;+5,70
02/06/2023;Internacional;Compra � vista;+7,70`

describe('organizeInvoiceLines', () => {
  it('should transform into an array when there is a line break', () => {
    const invoice = simpleMock

    const result = organizeInvoiceLines(invoice)

    expect(result['allLines']).toEqual([
      'Data da Transacao;Estabelecimento;Tipo da Transacao;Valor',
      '01/06/2023;Internacional;Compra � vista;+5,70',
      '02/06/2023;Internacional;Compra � vista;+7,70'
    ])
  })

  it('should filter greater than 0 and return bodyLines', () => {
    const invoice = simpleMock

    const result = organizeInvoiceLines(invoice)

    expect(result['bodyLines']).toEqual([
      ['01/06/2023', 'Internacional', 'Compra � vista', '+5,70'],
      ['02/06/2023', 'Internacional', 'Compra � vista', '+7,70']
    ])
  })

  it('should return topLine', () => {
    const invoice = simpleMock

    const result = organizeInvoiceLines(invoice)

    expect(result['topLine']).toEqual([
      'Data da Transacao',
      'Estabelecimento',
      'Tipo da Transacao',
      'Valor'
    ])
  })
})
