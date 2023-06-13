import {
  InputText,
  useInputText,
  InputRadio,
  useInputRadio,
  InputFile
} from '@kira/ui'
import {} from '@kira/ui'

export const FormReqApp = () => {
  const { handlerChange: handlerName, value: valueName } = useInputText('')
  const { handlerChange: handlerPhone, value: valuePhone } = useInputText('')

  const { handlerChange: handlerShirts, valueItem } = useInputRadio({})

  console.log(valueItem, 'here')

  return (
    <section className="flex flex-col">
      <InputText
        label="Nome Completo"
        onChange={(ev) => handlerName(ev)}
      ></InputText>

      <InputText
        label="Telefone"
        onChange={(ev) => handlerPhone(ev)}
      ></InputText>

      <div>
        <h1>Tamanho das camisas</h1>
        <InputRadio
          name={'shirts'}
          label="P"
          value="P"
          onChange={(ev) => handlerShirts(ev)}
        ></InputRadio>
        <InputRadio
          name={'shirts'}
          label="M"
          value="M"
          onChange={(ev) => handlerShirts(ev)}
        ></InputRadio>
        <InputRadio
          name={'shirts'}
          label="G"
          value="G"
          onChange={(ev) => handlerShirts(ev)}
        ></InputRadio>
        <InputRadio
          name={'shirts'}
          label="GG"
          value="GG"
          onChange={(ev) => handlerShirts(ev)}
        ></InputRadio>
        <InputRadio
          name={'shirts'}
          label="XG"
          value="XG"
          onChange={(ev) => handlerShirts(ev)}
        ></InputRadio>
      </div>

      <div>
        <h1>Input file</h1>
        <InputFile></InputFile>
      </div>
    </section>
  )
}
