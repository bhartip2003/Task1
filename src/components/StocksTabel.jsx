/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import {
  errorSelector,
  loadingSelector,
} from "../store/selectors/stockSelector";
import { useSelector } from "react-redux";
import { headers, headerTitle } from "../data/data.json";
import Loading from "./coreComponents/Loading";
import Table from "./coreComponents/Table";

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
      <Table data={data} headers={headers} headerTitle={headerTitle} toggle={true} handleClick={handleClick} />
    </div>
  );
};

export default StocksTable;
