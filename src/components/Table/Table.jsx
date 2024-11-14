import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import PropTypes from "prop-types";

const Table = ({ headers, data }) => {
  return (
    <table className="table-auto border-[1px] border-gray-300 text-left">
      <thead className="">
        <tr className="">
          {headers.map((header) => (
              <TableHeader key={header} label={header} />
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr className={`${index%2 == 0 ? 'bg-gray-200': 'bg-white'}`}>
          <TableRow key={index} rowItem={item} headers={headers} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
