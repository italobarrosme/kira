/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plan } from '../type'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
type StorePlans = {
  plans: Plan[]
  addPlan: (plan: Plan) => void
  removePlan: (id: string) => void
  markPlanAsCompleted: (id: string) => void
}

export const useStorePlans = create(
  persist<StorePlans>(
    (set) => ({
      plans: [],
      addPlan: (plan: Plan) => {
        set((state) => {
          return {
            ...state,
            plans: [...state.plans, plan]
          }
        })
      },
      removePlan: (id: string) => {
        set((state) => ({
          plans: state.plans.filter((plan) => plan.id !== id)
        }))
      },
      markPlanAsCompleted: (id: string) => {
        set((state) => ({
          plans: state.plans.map((plan) =>
            plan.id === id ? { ...plan, isCompleted: !plan.isCompleted } : plan
          )
        }))
      }
    }),
    {
      name: 'store-plans',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
