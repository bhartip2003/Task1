import { useNavigate } from "react-router-dom";
import {
  errorSelector,
  loadingSelector,
} from "../store/selectors/stockSelector";
import { useSelector } from "react-redux";
import { headers } from "../data.json";
import Loading from "./Loading";

const StocksTable = ({ data, title, color }) => {
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const navigate = useNavigate();

  if (loading) return <Loading />;

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleClick = (ticker) => {
    navigate(`company/${ticker}`);
  };

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <h1 className={`font-bold text-2xl ${color}`}>{title}</h1>
      <table className="my-2 border-2 border-gray-100 ">
        <thead className="">
          <tr className="my-2">
            {headers.map((header) => (
              <th key={header} className="px-3 border-x-2 capitalize">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data != undefined && data.length > 0 ? (
            data.map((stockData, index) => (
              <tr
                key={stockData.ticker}
                className={`${index % 2 == 0 ? "bg-gray-100 text-black" : ""} 
              border-[1px] border-gray-300 px-4 py-2 cursor-pointer hover:text-violet-500`}
                onClick={() => handleClick(stockData.ticker)}
              >
                {headers.map((header) => (
                  <td key={header} className="px-3 border-r-2 border-b-2">
                    {stockData[header]}
                  </td>
                ))}
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
