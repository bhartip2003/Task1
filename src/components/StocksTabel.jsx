import { useSelector } from "react-redux";
import {headers} from "../data.json";

const StocksTable = ({ data, title, color }) => {
  const { loading, error } = useSelector((state) => state.stocks);

  if (loading) return <p>LOADING...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="my-4 flex flex-col items-center">
      <h1 className={`font-bold text-2xl text-${color}`}>{title}</h1>
      <table className="my-2 max-w-max border-2 border-gray-100 flex flex-col items-center">
        <thead className="flex">
          {headers.map((header) => (
            <tr className=" flex items-center" key={header}>
              <th className="px-3 border-x-2 capitalize">{header}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {data != undefined && data.length > 0 ? (
            data.map((stocks, index) => (
              <tr
                key={stocks.ticker}
                className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"} 
              border-[1px] border-gray-300 px-4 py-2 w-full`}
              >
                <td className="px-3 border-r-2 border-b-2">{stocks.ticker}</td>
                <td className="px-3 border-r-2 border-b-2">{stocks.price}</td>
                <td className="px-3 border-r-2 border-b-2">
                  {stocks.change_amount}
                </td>
                <td className="px-3 border-r-2 border-b-2">
                  {stocks.change_percentage}
                </td>
              </tr>
            ))
          ) : (
            <tr className="py-2">
              <td>"No data found"</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StocksTable;
