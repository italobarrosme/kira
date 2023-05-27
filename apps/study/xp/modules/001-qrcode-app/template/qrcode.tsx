import { Icon } from '@iconify/react'
import { InputText } from '@kira/ui'
import { useQrcode } from '../hook'

export const QrcodeApp = () => {
  const { text, handleChange, viewQRCode, donwloadQRCode } = useQrcode()

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-secondary-500 my-2">
        Gerar QRCODE
      </h1>
      {text ? (
        <canvas ref={viewQRCode} />
      ) : (
        <div className="text-primary-500">
          <Icon width={200} icon="mdi:question-mark-box" />
        </div>
      )}

      <InputText
        label="Insira o texto que você deseja transformar em qrcode"
        icon="material-symbols:qr-code"
        id="qrcode"
        onChange={(event) => handleChange(event)}
      />
      {text ? (
        <button
          className="bg-secondary-100 text-secondary-500 rounded-md w-32 flex justify-center p-2 m-4 hover:bg-primary-400 hover:text-secondary-100"
          onClick={() => donwloadQRCode()}
        >
          <Icon icon="mdi:download" width={24} />
        </button>
      ) : null}
    </section>
  )
}
