import { Icon } from "@iconify/react";
import Link from "next/link";

export function Index() {

  return (
    <>
    <aside className="w-full py-4 sm:w-60 bg-secondary-100 text-primary-200">
    <nav className="text-sm">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="px-4 text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Estudos</h2>
        <div className="flex flex-col justify-between w-full">
        <Link href="/001-qrcode" className="p-4 flex items-center justify-between hover:bg-secondary-300 hover:text-secondary-100">
          Gerador de QRCODE <Icon width={24} icon='material-symbols:arrow-circle-right' />
        </Link>
        <Link href="/002-hitNumber" className="p-4 flex items-center justify-between hover:bg-secondary-300 hover:text-secondary-100">
          Acerte o número <Icon width={24} icon='material-symbols:arrow-circle-right' />
        </Link>
        </div>
      </div>
    </nav>
</aside>

    </>
  );
}

export default Index;
