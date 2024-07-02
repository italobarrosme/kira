import { GridCards } from '@kira/ui'
import { projectsList } from '../modules/Commons/projectsList'

export default function Index() {
  return (
    <div className="sm:flex w-screen h-screen gap-4 p-9">
      <h1 className="absolute top-[40%]">
        <span className="text-4xl font-bold text-brand-light">
          XP - Projects
        </span>
      </h1>
      <GridCards cards={projectsList} />
    </div>
  )
}
