/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react'
import { Plan } from '../type'
import { validatePlan } from '../domains'

export const useStorePlans = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const storedPlans = sessionStorage.getItem('@plans')

    if (storedPlans) {
      setPlans(JSON.parse(storedPlans))
    }
  }, [])

  const addPlan = (plan: Plan) => {
    const { isValid, messageError } = validatePlan(plan, plans)
    const newPlans = [...plans, plan]
    if (isValid) {
      sessionStorage.setItem('@plans', JSON.stringify(newPlans))
      setPlans(newPlans)
    }

    setError(messageError)
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
    markPlan,
    error
  }
}
