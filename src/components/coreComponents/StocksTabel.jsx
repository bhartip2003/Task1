import { useNavigate } from "react-router-dom";
import {
  errorSelector,
  loadingSelector,
} from "../../store/selectors/stockSelector";
import { useSelector } from "react-redux";
import { headers, headerTitle } from "../../data/data.json";
import Loading from "../Loading";
import Table from "../Table";

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
      
      {/* stock table */}
      <Table data={data} headers={headers} headerTitle={headerTitle} toggle={true} />
    </div>
  );
};

export default StocksTable;