import { useEffect, useState } from 'react'
import { FormPlanTemplate } from './FormPlanTemplate'
import { Button, InputSearch, useSearch } from '@kira/ui'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'
import { storePlans } from '../store'
import { Plan } from '../type'
import { CardItem } from '../components'

export const TodoListAppTemplate = () => {
  const ref = useRef(null)
  const {
    plans: listPlans,
    removePlan,
    markPlanAsCompleted,
    filterPlans,
    filteredPlans
  } = storePlans()
  const [plans, setPlans] = useState<Plan[]>([])
  const { handlerSearch, search } = useSearch()

  useEffect(() => {
    if (search.length > 0) {
      setPlans(filteredPlans)
    } else {
      setPlans(listPlans)
    }
  }, [search, plans, listPlans, filteredPlans])

  useEffect(() => {
    filterPlans({
      title: search,
      category: search
    })
  }, [search, filterPlans])

  const [isOpenForm, setOpenForm] = useState(false)
  const toggleForm = () => setOpenForm(!isOpenForm)
  useOnClickOutside(ref, toggleForm)

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl my-2">Todo List Advanced App</h1>
      <div className="my-4 w-80">
        <InputSearch
          id="filter"
          placeholder="Pesquisar"
          onChange={(ev) => {
            handlerSearch(ev)
          }}
        />
      </div>
      {isOpenForm ? (
        <div ref={ref}>
          <FormPlanTemplate />
        </div>
      ) : null}

      <div className="my-4 w-80">
        {plans.map((plan: Plan) => (
          <CardItem
            key={plan.id}
            item={plan}
            removeItem={() => removePlan(plan.id)}
            markItem={() => markPlanAsCompleted(plan.id)}
          />
        ))}
        <div className="">
          <Button label="Adicionar Plano" onClick={toggleForm} />
        </div>
      </div>
    </div>
  )
}
