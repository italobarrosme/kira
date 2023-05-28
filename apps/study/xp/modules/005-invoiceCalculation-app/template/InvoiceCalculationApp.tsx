import { InputSearch, InputTextArea, useInputTextArea } from '@kira/ui'
import { useSearch } from '@kira/ui'
import { formatMoney } from '@kira/utils'

import { useInvoiceReview } from '../domains'
import { useSearchFilter } from '../hook/'

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
      <section className="flex flex-col justify-center items-center">
        <InputTextArea
          label="Coloque sua fatura copiada de um csv"
          id="invoice"
          icon={'mdi:invoice-check-outline'}
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
