"use client";

import React from "react";
import { sideBarData } from "./sideBarData";
import { SidebarItem } from "./sidebarItem";

export const SideBar = () => {
  return (
    <div
      className={`bg-white rounded-2xl my-6 ml-4 flex-col justify-between items-center 
        text-center shadow relative w-44 xl:w-52 h-[96%] hidden lg:flex`}>
      <section className="flex flex-col gap-4 w-full h-[50vh] max-h-96">
        {sideBarData.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </section>
    </div>
  );
};
