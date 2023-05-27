import { InputSearch, InputText, useInputText } from '@kira/ui'
import { useSearch } from '@kira/ui'
import { formatMoney } from '@kira/utils'

import { useInvoiceReview } from '../domains'
import { useSearchFilter } from '../hook/'
import { useEffect, useState } from 'react'

export const InvoiceCalculationApp = () => {
  const [invoice, setInvoice] =
    useState(`Data da Transacao;Estabelecimento;Tipo da Transacao;Valor
  19/05/2023;Uber   *uber   *trip;;5,63
  19/05/2023;Uber   *uber   *trip;;5,56
  19/05/2023; ;;-5,56
  18/05/2023;Maquineta;;22,99
  16/05/2023;Emporio Karla          Paulista      Pe;;16,79
  16/05/2023;Iof Internacional;;2,75
  16/05/2023;Pag*anapauladasilva    Olinda        Bra;;47,50
  15/05/2023;Farmacia Fenix;;51,90
  15/05/2023;Github, Inc.           San Francisco Ca;;51,07
  14/05/2023;Ppro   *microsoft      Sao Paulo     Bra;;44,99
  13/05/2023;Limeira   Uber   *trip   Sao Paulo     Bra;;20,43
  13/05/2023;Tim*gigabp3bk9u72;;61,99
  12/05/2023;Uber   *uber   *trip   Sao Paulo     Bra;;19,91
  12/05/2023;Tim*gigabp3bk5b5x      Rio De Janeir Bra;;61,99
  11/05/2023;Apple.com/bill         Sao Paulo     Bra;;10,90
  08/05/2023;Pagamento On Line;;-3.632,23
  06/05/2023;Ifood  *ifd*dogueria   Sao Paulo     Bra;;29,93
  05/05/2023;Uber   *uber   *trip   Sao Paulo     Bra;;21,84
  05/05/2023;Uber   *uber   *trip   Sao Paulo     Bra;;24,97
  05/05/2023;Pague Menos 1164;;159,51
  03/05/2023;Uber   *uber   *trip   Sao Paulo     Bra;;13,30
  03/05/2023;Mp *lidianeunhas       Osasco        Bra;;94,00
  03/05/2023;Amazonprimebr          Sao Paulo     Bra;;14,90
  03/05/2023;Uber   *uber   *trip   Sao Paulo     Bra;;10,80
  02/05/2023;Uber   *uber   *trip   Sao Paulo     Bra;;11,94
  02/05/2023;Apple.com/bill         Sao Paulo     Bra;;49,90
  30/04/2023;Amazon Prime Canais    Sao Paulo     Bra;;16,90
  30/04/2023;Ifood  *ifd*haro Sush  Sao Paulo     Bra;;34,90
  30/04/2023;Uber   *uber   *trip   Sao Paulo     Bra;;19,95
  30/04/2023;Uber   *uber   *trip   Sao Paulo     Bra;;9,98`)

  const { handlerSearch, search } = useSearch()
  const { handlerChange, value } = useInputText('')

  // useEffect(() => {
  //   setInvoice(value)
  // }, [value])

  const { filter } = useSearchFilter({
    type: 'store',
    value: search
  })

  const { invoiceTotalResult, invoiceByStoreResult } = useInvoiceReview(
    invoice.trim(),
    filter
  )

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <InputText
          id="invoice"
          label="Invoice"
          onChange={(ev) => {
            handlerChange(ev)
          }}
        />
        <h1>
          Total da fatura:
          {formatMoney({
            value: invoiceTotalResult,
            currency: 'BRL',
            locale: 'pt-BR'
          })}
        </h1>

        <InputSearch
          id="store"
          label="Store where billed"
          onChange={(ev) => {
            handlerSearch(ev)
          }}
        />

        <h1>
          Total da fatura por loja:
          {formatMoney({
            value: invoiceByStoreResult,
            currency: 'BRL',
            locale: 'pt-BR'
          })}
        </h1>
      </section>
    </>
  )
}
