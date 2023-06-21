import { Plan } from '../type'

export const validatePlan = (plan: Plan, plans: Plan[]) => {
  const planExists = plans.find((item) => item.id === plan.id)
  let isValid = true
  let messageError = ''

  const validations = [
    { check: () => planExists, message: 'Plano já existe' },
    {
      check: () => !plan.title,
      message: 'Titulo do plano não pode ser vazio'
    },
    {
      check: () => !plan.description,
      message: 'Descrição não pode ser vazio'
    },
    { check: () => !plan.category, message: 'Categoria não pode ser vazio' }
  ]

  for (const { check, message } of validations) {
    if (check()) {
      messageError = message
      isValid = false
      break
    }
  }

  return {
    isValid,
    messageError
  }
}
