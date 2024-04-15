"use client";

import { MainLayout } from "@/layouts";
import { Routes } from "@/utils/Routes";
import { useRouter } from 'next/navigation';


export default function Home() {
  const navigate = useRouter();

  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="flex w-full justify-end">
          <div className="w-[200px] h-[40px] rounded-lg bg-blue-500 flex justify-center items-center"
            onClick={() => {
              navigate.push(Routes.productsRoutes.createProduct);
            }}>
            <h1>Crear producto</h1>
          </div>
        </div>

      </div>
    </MainLayout>
  );
}
