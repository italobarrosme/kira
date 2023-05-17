import { Button, ButtonProps } from './Button'
import { render, screen } from '@testing-library/react'

const renderComponent = ({ label, icon, onClick, ...props }: ButtonProps) => {
  return render(<Button label={label} icon={icon} {...props} />)
}

describe('Button', () => {
  it('render component', () => {
    const label = 'Iniciar'
    const icon = 'mdi:timer-play'
    const onClick = jest.fn()

    renderComponent({ label, icon, onClick })

    const button = screen.getByRole('button', { name: label })

    expect(button).toBeInTheDocument()
  })
})
