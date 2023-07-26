import { Button, ButtonProps } from './Button'
import { render, screen } from '@testing-library/react'

const renderComponent = ({
  label,
  icon,
  isLoading,
  onClick,
  ...props
}: ButtonProps) => {
  return render(
    <Button label={label} icon={icon} isLoading={isLoading} {...props} />
  )
}

describe('Button', () => {
  it('render component', () => {
    const label = 'Iniciar'
    const icon = 'mdi:timer-play'
    const isLoading = false
    const onClick = jest.fn()

    renderComponent({ label, icon, isLoading, onClick })

    const button = screen.getByRole('button')

    screen.debug(button)

    expect(button).toBeInTheDocument()
  })
})
