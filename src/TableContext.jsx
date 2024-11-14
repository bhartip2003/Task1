import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const TableContext = createContext();

export const TableProvider = ({ headers, data, children }) => {
  return (
    <TableContext.Provider value={{ headers, data }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
    const context = useContext(TableContext);
    if(!context){
        throw new Error('useTable context must be within tableprovider')
    }
    return context;
}

TableProvider.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node.isRequired,
};

