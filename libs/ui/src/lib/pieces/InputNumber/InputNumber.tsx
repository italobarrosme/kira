import { InputHTMLAttributes, ChangeEvent } from 'react';
import { Icon } from '@iconify/react';

type InputNumberProps = {
  id: string;
  label: string;
  icon?: string;
  maxNumber?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;


export const InputNumber = ({
  label,
  id,
  placeholder,
  icon = 'twemoji:neutral-face',
  maxNumber,
  onChange
}: InputNumberProps) => {

  return (
    <>
      <label htmlFor={id} className='uppercase text-secondary-500 font-bold my-2'>{label}</label>
      <div className='flex items-center bg-secondary-500 rounded-md px-2 h-8 w-full max-w-xl'>
        <Icon icon={icon} />
        <input onChange={(ev) => onChange(ev)} className='rounded-md focus:outline-none px-2' type="number" min={0} max={maxNumber} id={id} placeholder={placeholder} />
      </div>
    </>
  );
};