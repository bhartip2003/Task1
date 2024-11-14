import PropTypes from 'prop-types'

const TableHeader = ({label}) => {
    return(
        <th className='font-semibold px-4 py-2'>{label}</th>
    );}

TableHeader.propTypes = {
    label: PropTypes.string.isRequired,
};

export default TableHeader