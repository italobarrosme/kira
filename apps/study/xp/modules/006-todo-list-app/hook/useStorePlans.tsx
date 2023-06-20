/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import { Plan } from '../type'

export const useStorePlans = () => {
  const [plans, setPlans] = useState<Plan[]>([])

  useEffect(() => {
    const storedPlans = sessionStorage.getItem('@plans')

    if (storedPlans) {
      setPlans(JSON.parse(storedPlans))
    }
  }, [])

  const verifyErrosPlan = (plan: Plan, plans: Plan[]) => {
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

  const addPlan = (plan: Plan) => {
    const newPlans = [...plans, plan]
    const { isValid, messageError } = verifyErrosPlan(plan, plans)
    if (isValid) {
      console.log('PASSOU NA VERIFICACAO')
      sessionStorage.setItem('@plans', JSON.stringify(newPlans))
      setPlans(newPlans)
    }
    console.log('isValid', messageError)
  }

  const removePlan = (id: string) => {
    const newPlans = plans.filter((plan) => plan.id !== id)
    sessionStorage.setItem('@plans', JSON.stringify(newPlans))
    setPlans(newPlans)
  }

  const markPlan = (id: string) => {
    const newPlans = plans.map((plan) => {
      if (plan.id === id) {
        plan.isCompleted = !plan.isCompleted
      }
      return plan
    })

    sessionStorage.setItem('@plans', JSON.stringify(newPlans))
    setPlans(newPlans)
  }

  return {
    plans,
    addPlan,
    removePlan,
    markPlan
  }
}
