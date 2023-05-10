import { Icon } from '@iconify/react';
import { InputText } from '@kira/ui';
import {useState, useRef, ChangeEvent, useEffect, RefObject} from 'react';
import XpLayout from '../../layouts/XpLayout';

const Qrcode = () => {

  const [text, setText] = useState('');
  const viewQRCode = useRef(null) as RefObject<HTMLCanvasElement>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const donwloadQRCode = () => {
    const canvas = viewQRCode.current;

    if (!canvas) {
      return;
    }
    
    const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');

      link.download = 'qrcode.png';
      link.href = image;
      link.click();
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
    <XpLayout title='Acerte o número'>
      <section className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-secondary-500 my-2">Gerar QRCODE</h1>
        {text ? <canvas ref={viewQRCode} /> : 
        <div className='text-primary-500'>
          <Icon width={200} icon='mdi:question-mark-box' />
        </div>}

        <InputText label='Insira o texto que você deseja transformar em qrcode' icon='material-symbols:qr-code' id="qrcode" onChange={(event) => handleChange(event)} />
        {text ? 
        <button className='bg-secondary-100 text-secondary-500 rounded-md w-32 flex justify-center p-2 m-4 hover:bg-primary-400 hover:text-secondary-100' onClick={() => donwloadQRCode()}>
          <Icon icon='mdi:download' width={24}  />
        </button> : null}
      </section>
    </XpLayout>
    </>
  )
}

export default Qrcode;