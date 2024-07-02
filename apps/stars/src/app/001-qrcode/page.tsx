import { Qrcode } from '../../modules/001-qrcode-app'

export default function QrcodePage() {
  return (
    <div className="sm:flex w-screen h-screen gap-4 p-9">
      <Qrcode />
    </div>
  )
}
