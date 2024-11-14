import { useTableContext } from '../../TableContext';

const TableHeader = () => {
    const {headers} = useTableContext();
    return(
        <>
        {headers.map((label) => (
            <th key={label} className='font-semibold pl-2 py-2 w-[15rem] border-[1px] border-gray-300'>{label}</th>
        ))
        }
        </>
    );
}

export default TableHeader