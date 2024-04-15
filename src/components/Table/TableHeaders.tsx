
interface TableHeadersProps {
  headers: string[];
}
export const TableHeaders = ({ headers }: TableHeadersProps) => {

  return (
    <thead className={`text-base ${headers.length > 0 && "border-b"} h-10`}>
      <tr>
        {headers.map((item, index) => (
          <th
            key={item + index}
            className="text-medium-blue text-start font-bold text-[11px]"
          >
            {(item)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
