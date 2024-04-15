import { ReactNode } from "react";
import { TableBody } from "./TableBody";
import React from "react";
import { TableHeaders } from "./TableHeaders";

interface TableProps {
  headers?: string[];
  children: ReactNode;
  isLoading?: boolean;
}
export const Table = ({
  headers,
  isLoading,
  children,
}: TableProps) => {
  return (
    <div className="w-full h-full">
      <table className="table-auto text-start w-full h-full text-blue-001 mx-4">
        <TableHeaders headers={headers!} />
        <TableBody>{children}</TableBody>
      </table>
      {isLoading && (
        <div>
          <h1 className="text-black">
            Cargando ...
          </h1>
        </div>
      )}
    </div>
  );
};
