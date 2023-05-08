import { Icon } from "@iconify/react";
import Link from "next/link";

export function Index() {

  return (
    <>
    
    <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
    <nav className="space-y-8 text-sm">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">Estudos</h2>
        <div className="flex flex-col space-y-1">
        <Link href="/001-qrcode" className="flex items-center gap-4">
              Gerador de QRCODE <Icon width={18} icon='material-symbols:arrow-circle-right' />
            </Link>
        </div>
      </div>
    </nav>
</aside>

    </>
  );
}

export default Index;
