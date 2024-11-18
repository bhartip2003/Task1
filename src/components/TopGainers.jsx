import { useSelector, useDispatch } from "react-redux";
import { fetchTopGainers } from "../redux/stocksSlice";
import { useEffect } from "react";

const TopGainers = () => {
  const dispatch = useDispatch();
  const { topGainers, loading, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopGainers());
  }, []);

  if (loading) return <p>LOADING...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="my-4 flex flex-col items-center">
      <h1 className="font-bold text-2xl">Top Gainers</h1>
      <table className="my-2 max-w-max border-2 border-gray-100 flex flex-col items-center">
        <thead>
          <tr className="py-2 px-4">
            <th className="px-3 border-r-2 border-b-2">Ticker</th>
            <th className="px-3 border-r-2 border-b-2">Price</th>
            <th className="px-3 border-r-2 border-b-2">Change_Amount</th>
            <th className="px-3 border-b-2">Change %</th>
          </tr>
        </thead>
        <tbody>
          {topGainers != undefined && topGainers.length > 0 ? (
            topGainers.map((stocks, index) => (
              <tr
                key={index}
                className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"} 
              border-[1px] border-gray-300`}
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

export default TopGainers;
