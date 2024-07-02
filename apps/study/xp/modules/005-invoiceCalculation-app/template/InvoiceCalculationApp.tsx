import { InputSearch, InputTextArea, useInputTextArea } from '@kira/ui'
import { useSearch } from '@kira/ui'
import { formatMoney } from '@kira/utils'

import { useSearchFilter, useInvoiceReview } from '../hook/'

export const InvoiceCalculationApp = () => {
  const { handlerSearch, search } = useSearch()
  const { handlerTextArea, textArea } = useInputTextArea()

  const { filter } = useSearchFilter({
    type: 'store',
    value: search
  })

  const { invoiceTotalResult, invoiceByStoreResult, errorByStore } =
    useInvoiceReview(textArea, filter)

  return (
    <>
      <section className="flex flex-col justify-center items-center py-14">
        <InputTextArea
          label="Coloque sua fatura copiada de um csv"
          id="invoice"
          icon={'mdi:invoice-check-outline'}
          placeholder="Data da Transacao;Estabelecimento;Tipo da Transacao;Valor
          08/07/2023;Uber   *uber   *trip;Compra � vista;+8,66"
          onChange={(ev) => {
            handlerTextArea(ev)
          }}
        />
        <h1 className="text-2xl my-4 font-bold">
          Total da fatura:{' '}
          <span>
            {formatMoney({
              value: invoiceTotalResult,
              currency: 'BRL',
              locale: 'pt-BR'
            })}
          </span>
        </h1>

        <InputSearch
          id="store"
          icon="mdi:store"
          label="Filtre por estabelecimento"
          onChange={(ev) => {
            handlerSearch(ev)
          }}
        />

        {errorByStore && filter.store ? (
          <h1 className="text-2xl my-4 font-bold">{errorByStore}</h1>
        ) : (
          <h1 className="text-2xl my-4 font-bold">
            Total da fatura por loja:{' '}
            <span>
              {formatMoney({
                value: invoiceByStoreResult,
                currency: 'BRL',
                locale: 'pt-BR'
              })}
            </span>
          </h1>
        )}
      </section>
    </>
  )
}
