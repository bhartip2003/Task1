import React, {useEffect, useState} from "react";
import { headers, headerTitle } from "../data/product.json";
import Table from "../components/Table";
import { useDispatch ,useSelector } from "react-redux";
import { fetchCategory } from "../store/reducers/category";
import { fetchProducts, resetProducts } from "../store/reducers/product";
import { productSelector } from "../store/selectors/productSelector";
import Category from "../components/Category";
import InfiniteScroll from "../components/InfiniteScroll";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const productData = useSelector(productSelector);
  const dispatch = useDispatch();
  const limit = 15;

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts({category:null, limit: limit, skip: 0}));
  }, []);

  const handleButtonClick = (category) => {
    setSelectedCategory(category);

    dispatch(resetProducts());
    dispatch(
      fetchProducts({
        category: category,
        limit: limit,
        skip: 0,
      })
    );
  };
  
  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <Category onButtonClick={handleButtonClick}/>

      {/* product table */}
      <Table
        data={productData}
        headers={headers}
        headerTitle={headerTitle}
        toggle={false}
      />

      {/* infinite scroll */}
      <InfiniteScroll category={selectedCategory} />
    </div>
  );
};

export default Product;
