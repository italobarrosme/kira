import { XpLayout } from '../../layouts/'
import { QrcodeApp } from '../../modules/qrcode-app/template'

const Qrcode = () => {
  return (
    <>
      <XpLayout title="Acerte o número">
        <QrcodeApp />
      </XpLayout>
    </>
  )
}

export default Qrcode
