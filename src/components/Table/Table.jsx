import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import PropTypes from "prop-types";
import {TableProvider} from "../../TableContext";

const Table = ({ headers, data }) => {
  return (
    <TableProvider headers={headers} data={data}>
      <table className=" border-[1px] border-gray-300 text-left">
        <thead className="">
          <tr className="border-[1px] border-gray-300">
            <TableHeader />
          </tr>
        </thead>

        <tbody>
          <TableRow />
        </tbody>
      </table>
    </TableProvider>
  );
};
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
