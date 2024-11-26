import React from "react";
import { categorySelector } from "../store/selectors/categorySelector"
import Button from "./Button";
import { fetchProducts, resetProducts } from "../store/reducers/product";
import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const categoryData = useSelector(categorySelector);
  const dispatch = useDispatch();
  const limit = 15;
  

  const handleButtonClick = (selectedCategory) => {
    dispatch(resetProducts());
    
    dispatch(
      fetchProducts({
        category: selectedCategory,
        limit: limit,
        skip: 0,
      })
    );
  };
  
  return (
    <div className="flex gap-x-5 ">
      {categoryData.length > 0 ? (
        categoryData
          .slice(0, 5)
          .map((category) => (
            <Button
              key={category.slug}
              type={category.slug}
              name={category.name}
              onClick={() => handleButtonClick(category.slug)}
            />
          ))
      ) : (
        <p>Loading Categories...</p>
      )}
    </div>
  );
};

export default Category;
