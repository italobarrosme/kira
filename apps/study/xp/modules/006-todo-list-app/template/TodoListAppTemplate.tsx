import { useEffect, useState } from 'react'
import { FormPlanTemplate } from './FormPlanTemplate'
import { Button } from '@kira/ui'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'
import { storePlans } from '../store'
import { Plan } from '../type'
import { CardItem } from '../components'

export const TodoListAppTemplate = () => {
  // const filterPlans = () => console.log('filterPlans')

  const ref = useRef(null)
  const { plans: listPlans, removePlan, markPlanAsCompleted } = storePlans()
  const [plans, setPlans] = useState<Plan[]>([])

  useEffect(() => {
    setPlans(listPlans)
  }, [listPlans])

  const [isOpenForm, setOpenForm] = useState(false)
  const toggleForm = () => setOpenForm(!isOpenForm)
  useOnClickOutside(ref, toggleForm)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-4">Todo List Advanced App</h1>
      {isOpenForm ? (
        <div ref={ref}>
          <FormPlanTemplate />
        </div>
      ) : null}

      <div className="w-2/4">
        {plans.map((plan: Plan) => (
          <CardItem
            key={plan.id}
            item={plan}
            removeItem={() => removePlan(plan.id)}
            markItem={() => markPlanAsCompleted(plan.id)}
          />
        ))}
        <div>
          <Button label="Adicionar Plano" onClick={toggleForm} />
        </div>
      </div>
    </div>
  )
}
