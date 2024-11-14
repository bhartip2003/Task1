import { useTableContext } from "../../TableContext";

const TableRow = () => {
  const { headers, data } = useTableContext();
  return (
    <>
      {data.length > 0
        ? data.map((rowData, index) => (
            <tr
              className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"} 
              border-[1px] border-gray-300`}
              key={index}
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="pl-2 py-2 border-r-[1px] border-gray-300"
                >
                  {rowData[header]}
                </td>
              ))}
            </tr>
          ))
        : "No data available."}
    </>
  );
};

export default TableRow;
