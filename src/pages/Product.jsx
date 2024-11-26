import React, {useEffect, useState} from "react";
import { headers, headerTitle } from "../data/product.json";
import Table from "../components/Table";
import { useDispatch ,useSelector } from "react-redux";
import { fetchCategory } from "../store/reducers/category";
import { fetchProducts, resetProducts, setLoading } from "../store/reducers/product";
import { loadingSelector, productSelector } from "../store/selectors/productSelector";
import Category from "../components/Category";
import InfiniteScroll from "../components/InfiniteScroll";
import { limitSelector } from "../store/selectors/paginationSelector";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const productData = useSelector(productSelector);
  const dispatch = useDispatch();
  const limit = useSelector(limitSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(setLoading(true));
    dispatch(fetchProducts({category:null, limit: limit, skip: 0}));
    dispatch(setLoading(false));
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
        loading={loading}
      />

      {/* infinite scroll */}
      <InfiniteScroll category={selectedCategory} />
    </div>
  );
};

export default Product;
