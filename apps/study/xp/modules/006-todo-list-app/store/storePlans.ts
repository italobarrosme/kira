/* eslint-disable @typescript-eslint/no-explicit-any */
import { Plan } from '../type'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
type StorePlans = {
  plans: Plan[]
  filteredPlans: Plan[]
  addPlan: (plan: Plan) => void
  removePlan: (id: string) => void
  markPlanAsCompleted: (id: string) => void
  filterPlans: ({ title, category }: Pick<Plan, 'category' | 'title'>) => void
}

export const storePlans = create(
  persist<StorePlans>(
    (set) => ({
      plans: [],
      filteredPlans: [],
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
      },
      filterPlans: ({ title, category }: Pick<Plan, 'category' | 'title'>) => {
        return set((state) => {
          const filteredPlans = state.plans.filter((plan) => {
            return (
              plan.title.toLowerCase().includes(title.toLowerCase()) ||
              plan.category.toLowerCase().includes(category.toLowerCase())
            )
          })
          return {
            ...state,
            filteredPlans
          }
        })
      }
    }),
    {
      name: 'store-plans',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
