import { MainLayout } from "@/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout title={""}  >
      <div className="flex flex-col gap-7">
        <h1 className="text-[20px] font-bold text-cian-blue">Esto es una Columna</h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-black">Texto 1</h1>
          <h1 className="text-black">Texto 2</h1>
          <h1 className="text-black">Texto 3</h1>
        </div>
        <h1 className="text-[20px] font-bold text-cian-blue">Esto es una Fila</h1>
        <div className="flex gap-4">
          <h1 className="text-black">Texto 1</h1>
          <h1 className="text-black">Texto 2</h1>
          <h1 className="text-black">Texto 3</h1>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="bg-red-400 w-[100px] h-[100px] rounded"></div>
          <div className="bg-blue-400 w-[100px] h-[100px] rounded-full"></div>
        </div>
        <Image
          src="/assets/vercel.svg"
          alt="Foto del producto"
          width={167} height={134}
          sizes="100vw"
        />
      </div>
    </MainLayout>
  );
}
