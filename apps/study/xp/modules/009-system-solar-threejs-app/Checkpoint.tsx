import render from './functions/render'

export const Checkpoint = () => {
  if (typeof window !== 'undefined') {
    render()
  }
  return (
    <div className="w-full h-full">
      <div id="scene"> </div>
    </div>
  )
}
