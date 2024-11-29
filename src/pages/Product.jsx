import React, { useEffect, useState } from "react";
import { headers, headerTitle } from "../data/product.json";
import Table from "../components/coreComponents/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/reducers/category";
import { fetchProducts, resetProducts } from "../store/reducers/product";
import {
  productSelector,
} from "../store/selectors/productSelector";
import Category from "../components/product/Category";
import InfiniteScroll from "../components/product/InfiniteScroll";
import { limitSelector } from "../store/selectors/paginationSelector";
import { resetPagination } from "../store/reducers/pagination";
import { useSearchParams } from "react-router-dom";
import { SearchParams } from "../constants/searchParams";
import ModalForm from "../components/product/ModalForm";
import { formSelector } from "../store/selectors/formSelector";
import { setModal } from "../store/reducers/form";


const Product = () => {
  const productData = useSelector(productSelector);
  const dispatch = useDispatch();
  const limit = useSelector(limitSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = useSelector(formSelector);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts({ category: searchParamsCategory, limit: limit, skip: 0 }));
  }, []);

  const searchParamsCategory = searchParams.get("category");

  useEffect(() => {
    dispatch(resetProducts());
    dispatch(resetPagination({ limit: limit, skip: 0, currPage: 1 }));
    dispatch(
      fetchProducts({
        category: searchParamsCategory,
        limit: limit,
        skip: 0,
      })
    );
  }, [searchParamsCategory]);


  const handleButtonClick = (category) => {
    if (category) {
      searchParams.set(SearchParams.CATEGORY, category );
    } else {
      searchParams.delete(SearchParams.CATEGORY);
    }
    setSearchParams(searchParams);
  };

 const handleEditClick = () => {
    dispatch(setModal(!isModalOpen));
 }

  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <Category onButtonClick={handleButtonClick} />

      {/* product table */}
      <Table
        data={productData}
        headers={headers}
        headerTitle={headerTitle}
        toggle={false}
        isEditable={true}
        handleEditClick={handleEditClick}
      />

      {/* infinite scroll */}
      <InfiniteScroll category={searchParamsCategory} />

      { isModalOpen ? <ModalForm setModal={handleEditClick}  /> : null}
    </div>
  );
};

export default Product;
