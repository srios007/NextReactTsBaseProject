"use client";

import { ReactElement, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
  icon: React.ReactNode;
}

export const SidebarItem: React.FC<Props> = ({
  title,
  path,
  icon,
}: Props): ReactElement => {
  const pathName = usePathname() ?? "";
  const isActiveItem = useMemo(
    () =>
      (path: string): boolean => {
        return path != "/"
          ? pathName.includes(path.replace("/", ""))
          : pathName == path;
      },
    [pathName]
  );

  return (
    <Link
      className={`flex justify-center h-[49px] rounded-lg bg-transparent pl-5 ${isActiveItem(path)
        ? "border-b-[0.5px] border-medium-blue shadow-fourPx"
        : ""
        }`}
      href={path}>
      <div className="flex justify-start w-full items-center gap-4 ">
        <div className={`w-5 h-5 ${isActiveItem(path) ? "text-medium-blue font-bold" : "text-dark-blue"}`}>
          {icon}
        </div>
        <h1 className={`text-xs ${isActiveItem(path) ? "text-medium-blue font-bold" : "text-dark-blue"}`}>
          {title}
        </h1>
      </div>
    </Link>
  );
};
