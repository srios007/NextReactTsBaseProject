"use client";

import { ReactNode } from "react";
import { SideBar } from "@/components/sideBar/sideBar";

interface MainLayoutProps {
  paddingTop?: string;
  children: ReactNode;
}

export const MainLayout = ({
  children,
  paddingTop,
}: MainLayoutProps) => {

  return (
    <main className="relative h-screen overflow-hidden bg-background-gray rounded-2xl">
      <div className="flex items-start justify-between h-full ">
        <SideBar />
        <div className="flex flex-col w-full h-full">
          <div className={`h-full w-full bg-transparent overflow-hidden ${paddingTop ? paddingTop : "pt-10"}`}>
            <div className="overflow-auto w-full h-full px-10 pb-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
