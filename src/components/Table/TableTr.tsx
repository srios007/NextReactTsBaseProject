import React from "react";

interface TableTrProps {
  children: React.ReactNode;
  hasBorder?: boolean;
}
export const TableTr = ({ children, hasBorder }: TableTrProps) => {
  return (
    <tr className={`text-[10px] w-full ${hasBorder && "border-t"}`}>
      {children}
    </tr>
  );
};
