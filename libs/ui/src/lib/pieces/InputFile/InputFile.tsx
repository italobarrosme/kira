import { InputHTMLAttributes } from 'react'

export type InputFileProps = {
  fileData?: File
} & InputHTMLAttributes<HTMLInputElement>

export const InputFile = ({
  fileData,
  name = 'inputFile',
  onChange
}: InputFileProps) => {
  return (
    <div className="relative truncate">
      <div className="p-1 border-dashed border-2 border-brand-dark z-50 max-w-[210px]">
        <label
          className="w-auto h-10 cursor-pointer p-4 text-sm font-medium rounded-sm relative px-2"
          htmlFor={name}
        >
          {fileData?.name || 'Selecione um arquivo'}
        </label>
      </div>
      <input
        id={name}
        name={name}
        type="file"
        className="w-auto max-w-[210px] h-10 outline-none text-sm font-medium rounded-sm relative px-2"
        onChange={onChange}
      />
    </div>
  )
}
