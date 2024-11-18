import { useSelector, useDispatch } from "react-redux";
import { fetchTopGainers } from "../redux/stocksSlice";
import { useEffect } from "react";

const TopGainers = () => {
  const dispatch = useDispatch();
  const { topGainers, loading, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchTopGainers);
  }, [dispatch]);

  if (loading) return <p>LOADING...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {!loading && (
        <table>
          <thead>
            <th>Ticker</th>
            <th>Price</th>
            <th>Change_Amount</th>
            <th>Change %</th>
          </thead>
          <tbody>
            {topGainers.map((stocks, index) => (
              <tr key={index}>
                <td>{stocks.ticker}</td>
                <td>{stocks.price}</td>
                <td>{stocks.change_amount}</td>
                <td>{stocks.change_percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopGainers;
