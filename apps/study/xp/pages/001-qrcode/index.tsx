import { Icon } from '@iconify/react';
import { InputText } from '@kira/ui';
import {useState, useRef, ChangeEvent, useEffect} from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QRious: any;
  }
}

const Qrcode = () => {

  const [text, setText] = useState('');
  const viewQRCode = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  useEffect(() => {
    new window.QRious({
      element: viewQRCode.current,
      value: text,
      size: 200
    });
  }, [text]);
  
  return (
    <>
    <section className="flex flex-col h-screen justify-center items-center">
      <h1 className="font-bold text-2xl text-secondary-500 my-2">Gerar QRCODE</h1>
      {text ? <canvas ref={viewQRCode} /> : 
      <div className='text-primary-500'>
        <Icon width={200} icon='mdi:question-mark-box' />
      </div>}

      <InputText label='Insira o texto que você deseja transformar em qrcode' icon='material-symbols:qr-code' id="qrcode" onChange={(event) => handleChange(event)} />
    </section>
    </>
  )
}

export default Qrcode;