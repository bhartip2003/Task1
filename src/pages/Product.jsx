import React, {useEffect} from "react";
import { headers, headerTitle } from "../data/product.json";
import Table from "../components/Table";
import { useDispatch ,useSelector } from "react-redux";
import { fetchCategory } from "../store/reducers/category";
import { fetchProducts } from "../store/reducers/product";
import { productSelector } from "../store/selectors/productSelector";
import Category from "../components/Category";

const Product = () => {
  
  const productData = useSelector(productSelector);
  const dispatch = useDispatch();
  const limit = 15;
  
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts({category:null, limit: limit, skip: 0}));
  }, []);
  
  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <Category />

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
