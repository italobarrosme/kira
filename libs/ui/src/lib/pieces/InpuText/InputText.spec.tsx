import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { InputText, InputTextProps } from './InputText'

const renderComponent = ({
  label,
  id,
  placeholder,
  icon,
  onChange,
  ...props
}: InputTextProps) => {
  return render(
    <InputText
      label={label}
      id={id}
      placeholder={placeholder}
      icon={icon}
      onChange={onChange}
      {...props}
    />
  )
}

describe('InputText', () => {
  it('render component', () => {
    const label = 'Iniciar'
    const id = 'id'
    const placeholder = 'placeholder'
    const icon = 'mid:user'
    const onChange = jest.fn()

    renderComponent({ label, id, placeholder, icon, onChange })

    const input = screen.getByRole('textbox', { name: label })

    expect(input).toBeInTheDocument()
  })
})
