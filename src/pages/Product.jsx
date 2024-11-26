import React, { useState, useEffect } from "react";
import { headers, headerTitle } from "../data/product.json";
import Button from "../components/Button";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { categorySelector } from "../store/selectors/categorySelector";
import { fetchCategory } from "../store/reducers/category";
import { fetchProducts } from "../store/reducers/product";
import {productSelector} from "../store/selectors/productSelector";

const Product = () => {
  const [data, setData] = useState([]);
  const categoryData = useSelector(categorySelector);
  const productData = useSelector(productSelector);
  const dispatch = useDispatch();

  const limit = 15;


  useEffect(() => {
    dispatch(fetchProducts({limit:limit, skip:10}));
    dispatch(fetchCategory());
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <div className="flex gap-x-5">
        {categoryData.length > 0 ? (
          categoryData
            .slice(0, 5)
            .map((category) => (
              <Button
                key={category.slug}
                type={category.slug}
                name={category.name}
              />
            ))
        ) : (
          <p>Loading Categories...</p>
        )}
      </div>
        
        {/* product table */}
      <Table data={productData} headers={headers} headerTitle={headerTitle} toggle={false} />
    </div>
  );
};

export default Product;
