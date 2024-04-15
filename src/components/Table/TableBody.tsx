interface TableHeadersProps {
  children: React.ReactNode;
}
export const TableBody = ({ children }: TableHeadersProps) => {
  return (
    <tbody className="text-xs font-normal w-full text-dark-blue">
      {children}
    </tbody>
  );
};
