import { useSelector, useDispatch } from "react-redux";

const TopGainers = () => {
  const dispatch = useDispatch();
  const { topGainers, loading, error } = useSelector((state) => state.stocks);
  if(error){
    console.log(error);
    return error;
  }

  return (
    
    <div>
      {!loading && (
        <table>
          <thead>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopGainers;
