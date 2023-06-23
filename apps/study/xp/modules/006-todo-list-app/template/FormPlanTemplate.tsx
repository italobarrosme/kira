import {
  InputText,
  useInputText,
  useInputTextArea,
  InputTextArea,
  Button,
  useToastNotification
} from '@kira/ui'

import { useStorePlans } from '../hook'
import { generateId } from '@kira/utils'
import { validatePlan } from './../domains/'

export const FormPlanTemplate = () => {
  const { addNotification } = useToastNotification()
  const { addPlan, plans } = useStorePlans()

  const { handlerChange: changeTitlePlan, value: valueTitlePlan } =
    useInputText('')

  const {
    handlerTextArea: changeDescriptionPlan,
    textArea: valueDescriptionPlan
  } = useInputTextArea()

  const { handlerChange: changeCategoryPlan, value: valueCategoryPlan } =
    useInputText('')

  const submitForm = () => {
    const plan = {
      id: generateId(5),
      title: valueTitlePlan,
      description: valueDescriptionPlan,
      category: valueCategoryPlan,
      isCompleted: false,
      date: new Date().toLocaleString()
    }

    const { isValid, messageError } = validatePlan(plan, plans)

    if (isValid) {
      addPlan(plan)
      addNotification({
        title: 'Plano adicionado com sucesso',
        message: `O plano ${valueTitlePlan} foi adicionado com sucesso`,
        position: 'center-top',
        timeout: 5000,
        type: 'success'
      })
    } else {
      addNotification({
        title: 'Erro ao adicionar plano',
        message: `${messageError}`,
        position: 'center-bottom',
        timeout: 5000,
        type: 'error'
      })
    }
  }

  return (
    <div className="w-80 bg-primary-300 p-4 rounded-md absolute right-0 top-0 z-50 shadow-xl">
      <h1 className="mb-4">Formulario para adicionar um novo plano</h1>
      <div>
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
      </div>
    </div>
  )
}
