import { useSelector, useDispatch } from "react-redux";
import { fetchTopLosers } from "../redux/stocksSlice";

const TopLosers = () => {
  const dispatch = useDispatch();
  const { topLosers, loading, error } = useSelector((state) => state.stocks);
  useEffect(() => {
    dispatch(fetchTopLosers);
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
            {topLosers.map((stocks, index) => (
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

export default TopLosers;
