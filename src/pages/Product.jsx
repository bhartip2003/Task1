import React, { useState, useEffect } from "react";
import { headers, headerTitle } from "../data/product.json";
import Button from "../components/Button";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "../store/selectors/categorySelector";
import { fetchCategory } from "../store/reducers/category";
import { fetchProducts, fetchProductsByCategory, resetProducts } from "../store/reducers/product";
import { productSelector } from "../store/selectors/productSelector";

const Product = () => {
  const categoryData = useSelector(categorySelector);
  const productData = useSelector(productSelector);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const limit = 15;

  useEffect(() => {
    dispatch(resetProducts());
    
    if(category == null)
      dispatch(fetchProducts({ limit: limit, skip: 0 }));
    else {
      dispatch(fetchProductsByCategory({category: category, limit: limit, skip: 0}));
    }

    dispatch(fetchCategory());
  }, []);

  const handleButtonClick = (selectedCategory) => {
    setCategory(selectedCategory);
  }

  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <div className="flex gap-x-5">
        {categoryData.length > 0 ? (
          categoryData.slice(0, 5).map((category) => (
            <div onClick={() => handleButtonClick(category.slug)}>
              <Button
                key={category.slug}
                type={category.slug}
                name={category.name}
              />
            </div>
          ))
        ) : (
          <p>Loading Categories...</p>
        )}
      </div>

      {/* product table */}
      <Table
        data={productData}
        headers={headers}
        headerTitle={headerTitle}
        toggle={false}
      />
    </div>
  );
};

export default Product;
