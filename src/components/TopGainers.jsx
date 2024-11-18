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
    <div>
        <table className="max-w-max border-2 border-gray-100">
          <thead>
            <tr className="">
              <th>Ticker</th>
              <th>Price</th>
              <th>Change_Amount</th>
              <th>Change %</th>
            </tr>
          </thead>
          <tbody>
            {topGainers != undefined && topGainers.length > 0 ? ( topGainers.map((stocks, index) => (
              <tr key={index} className="">
                <td>{stocks.ticker}</td>
                <td>{stocks.price}</td>
                <td>{stocks.change_amount}</td>
                <td>{stocks.change_percentage}</td>
              </tr>
            ))) : <tr><td>"No data found"</td></tr> }
          </tbody>
        </table>
     
    </div>
  );
};

export default TopGainers;
