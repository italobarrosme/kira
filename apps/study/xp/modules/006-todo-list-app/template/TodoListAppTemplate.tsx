import { useEffect, useState } from 'react'
import { FormPlanTemplate } from './FormPlanTemplate'
import { Button } from '@kira/ui'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'
import { useStorePlans } from '../hook'
import { Plan } from '../type'
import { CardItem } from '../components'

export const TodoListAppTemplate = () => {
  // const markPlan = () => console.log('markPlan')
  // const filterPlans = () => console.log('filterPlans')

  const ref = useRef(null)

  const { plans: listPlans, removePlan } = useStorePlans()

  const [isOpenForm, setOpenForm] = useState(false)
  const toggleForm = () => setOpenForm(!isOpenForm)
  useOnClickOutside(ref, toggleForm)

  console.log('listPlans', listPlans)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-4">Todo List App</h1>

      {isOpenForm ? (
        <div ref={ref}>
          <FormPlanTemplate />
        </div>
      ) : null}

      <div className="w-2/4">
        {listPlans.length > 0
          ? listPlans.map((plan: Plan) => (
              <CardItem key={plan.id} item={plan} removeItem={removePlan} />
            ))
          : null}

        <div>
          <Button label="Adicionar task" onClick={toggleForm} />
        </div>
      </div>
    </div>
  )
}
