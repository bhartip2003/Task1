import PropTypes from "prop-types";

const TableRow = ({ headers, rowItem }) => {
  return (
    <>
    {headers.map((header) => (
      <td key={header} className="px-4 py-2">
        {rowItem[header]}
      </td>
    ))}
    </>

);
}
TableRow.propTypes = {
  rowItem: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableRow;
