import {
  InputText,
  useInputText,
  useInputTextArea,
  InputTextArea,
  Button
} from '@kira/ui'

import { useStorePlans } from '../hook'

export const FormPlanTemplate = () => {
  const { handlerChange: changeTitlePlan, value: valueTitlePlan } =
    useInputText('')

  const {
    handlerTextArea: changeDescriptionPlan,
    textArea: valueDescriptionPlan
  } = useInputTextArea()

  const { handlerChange: changeCategoryPlan, value: valueCategoryPlan } =
    useInputText('')

  const { addPlan } = useStorePlans()

  const submitForm = () => {
    addPlan({
      id: Math.random().toString(36).slice(2, 5),
      title: valueTitlePlan,
      description: valueDescriptionPlan,
      category: valueCategoryPlan,
      isCompleted: false,
      date: new Date().toLocaleString()
    })
  }

  return (
    <div className="w-80 bg-primary-300 p-4 rounded-md absolute right-0 top-0">
      <h1 className="mb-4">Formulario para adicionar um novo plano</h1>
      <form>
        <InputText
          label="Titulo do plano"
          onChange={(ev) => changeTitlePlan(ev)}
        />
        <InputTextArea
          label="Descrição do plano"
          onChange={(ev) => changeDescriptionPlan(ev)}
        />
        <InputText
          label="Categoria"
          onChange={(ev) => changeCategoryPlan(ev)}
        />

        <Button label="Adicionar" onClick={() => submitForm()} />
      </form>
    </div>
  )
}
