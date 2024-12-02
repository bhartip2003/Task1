/* eslint-disable react/prop-types */

const Table = ({
  headers,
  data,
  handleClick,
  headerTitle,
  toggle,
  isEditable,
  isDeletable,
  handleEditClick,
  handleDeleteClick
}) => {
  return (
    <table className="my-2 border-2 border-gray-100 ">
      {/* table header */}
      <thead>
        <tr className="my-2">
          {headerTitle.map((header) => (
            <th key={header} className="px-3 border-2 capitalize">
              {header}
            </th>
          ))}
          {isEditable ? (
            <th className="px-3 border-2 capitalize" colSpan={isDeletable ? 2 : 1}>Action</th>
          ) : null}
        </tr>
      </thead>
      {/* table body */}
      <tbody>
        {data && data.length ? (
          data.map((item, index) => (
            <tr
              key={item.ticker}
              className={`${
                index % 2 == 0 && toggle ? "bg-gray-100 text-black" : ""
              } 
               h-12 border-gray-300 px-4 py-2 cursor-pointer hover:text-violet-500`}
              onClick={() => handleClick(item.ticker)}
            >
              {headers.map((header) => (
                <td key={header} className="px-3 border-r-2 ">
                  {item[header]}
                </td>
              ))}
              {isEditable ? (
                <td className="px-4">
                  <button
                    className=" px-1 rounded-sm hover:text-violet-500 hover:underline bg-gray-100 text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(item.id)
                    }}
                  >
                    Edit
                  </button>
                </td>
              ) : null}
              {isDeletable ? (
                <td className="px-4">
                  <button
                    className=" px-1 rounded-sm hover:bg-red-700 hover:underline bg-red-500 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(item.id)
                    }}
                  >
                    Delete
                  </button>
                </td>
              ) : null}
            </tr>
          ))
        ) : (
          <tr className="py-2">
            <td>No data found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
