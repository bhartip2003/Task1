import { useEffect, useState } from "react";
import { headers, headerTitle } from "../data/product.json";
import Table from "../components/coreComponents/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../store/reducers/category";
import {
  fetchProducts,
  resetProducts,
  updateProduct,
  fetchOneProduct,
  clearProductItem,
  addProduct,
} from "../store/reducers/product";
import {
  loadingSelector,
  productItemSelector,
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
import { formField } from "../config.json";

const Product = () => {
  const dispatch = useDispatch();
  const productData = useSelector(productSelector);
  const limit = useSelector(limitSelector);
  const productItem = useSelector(productItemSelector);
  const loading = useSelector(loadingSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = useSelector(formSelector);
  const [modalAction, setModalAction] = useState("");

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(
      fetchProducts({ category: searchParamsCategory, limit: limit, skip: 0 })
    );
  }, []);

  const searchParamsCategory = searchParams.get(SearchParams.CATEGORY);

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
      searchParams.set(SearchParams.CATEGORY, category);
    } else {
      searchParams.delete(SearchParams.CATEGORY);
    }
    setSearchParams(searchParams);
  };

  const handleEditClick = (id) => {
    setModalAction("edit");
    dispatch(setModal(true));
    if (id) {
      searchParams.append(SearchParams.ID, id);
      dispatch(fetchOneProduct(id));
    }else {
      searchParams.delete(SearchParams.ID);
    }
    dispatch(clearProductItem());
    setSearchParams(searchParams);
  };

  const handleAddClick = () => {
    setModalAction("add");
    dispatch(clearProductItem());
    dispatch(setModal(true));
  }

  const handleSubmit = (formData) => {
    if( modalAction == "edit"){
      dispatch(updateProduct(formData));
      searchParams.delete(SearchParams.ID);
      setSearchParams(searchParams);
    } else if(modalAction == "add"){
      dispatch(addProduct(formData));
    }
    dispatch(clearProductItem());
    dispatch(setModal(false));
  }

  return (
    <div className="container flex flex-col justify-center items-center my-32 gap-y-10">
      <h1 className="text-3xl font-semibold ">Products Page</h1>

      {/* product category */}
      <Category onButtonClick={handleButtonClick} />

      <button
        className="bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md"
        onClick={handleAddClick}
      >
        Add Item +
      </button>

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

      {isModalOpen ? (
        <ModalForm
        buttonText={modalAction}
        title={`${modalAction} Item`}
          setModal={() => dispatch(setModal(!isModalOpen))}
          formField={formField}
          onSubmit={handleSubmit}
          productDetails={productItem}
          loading={loading}
        />
      ) : null}
    </div>
  );
};

export default Product;
