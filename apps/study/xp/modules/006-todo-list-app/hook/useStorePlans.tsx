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

  const addPlan = (plan: Plan) => {
    const newPlans = [...plans, plan]
    sessionStorage.setItem('@plans', JSON.stringify(newPlans))
    setPlans(newPlans)
  }

  const removePlan = (id: string) => {
    const newPlans = plans.filter((plan) => plan.id !== id)
    sessionStorage.setItem('@plans', JSON.stringify(newPlans))
    setPlans(newPlans)
  }

  return {
    plans,
    addPlan,
    removePlan
  }
}
