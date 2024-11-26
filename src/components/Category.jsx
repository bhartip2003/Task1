import { categorySelector } from "../store/selectors/categorySelector";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

const Category = ({ onButtonClick }) => {
  const categoryData = useSelector(categorySelector);

  return (
    <div className="flex gap-x-5 ">
        {/* reset button to display products from all categories */}
      <Button type="reset" name="Reset" onClick={() => onButtonClick(null)} />

        {/* category buttons  */}
      {categoryData.length > 0 ? (
        categoryData
          .slice(0, 5)
          .map((category) => (
            <Button
              key={category.slug}
              type={category.slug}
              name={category.name}
              onClick={() => onButtonClick(category.slug)}
            />
          ))
      ) : (
        <p>Loading Categories...</p>
      )}
    </div>
  );
};

export default Category;
