import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopLosers } from "../redux/stocksSlice";

const TopLosers = () => {
  const dispatch = useDispatch();
  const { topLosers, loading, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopLosers());
  }, []);

  if (loading) return <p>LOADING...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
        <table className="">
          <thead className="">
            <tr className="">
              <th>Ticker</th>
              <th>Price</th>
              <th>Change_Amount</th>
              <th>Change %</th>
            </tr>
          </thead>
          <tbody >
            { topLosers != undefined && topLosers.length > 0 ? 
            (topLosers.map((stocks, index) => (
              <tr key={index} className="">
                <td className="">{stocks.ticker}</td>
                <td className="">{stocks.price}</td>
                <td className="">{stocks.change_amount}</td>
                <td className="">{stocks.change_percentage}</td>
              </tr>
              ) 
            )): <tr><td>"No data found"</td></tr> }
          </tbody>
        </table>
    </div>
  );
};

export default TopLosers;
