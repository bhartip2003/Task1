import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setLoading } from "../store/reducers/product";
import {
  loadingSelector,
  productSelector,
} from "../store/selectors/productSelector";
import Loading from "./Loading";

const InfiniteScroll = ({ category }) => {
  const { ref, inView } = useInView();
  const dispatch = useDispatch();
  const productData = useSelector(productSelector);
  const loading = useSelector(loadingSelector);

  const pageNumber = productData.length / 15;
  useEffect(() => {
    dispatch(setLoading(true));
    if (inView && !loading) {
      setTimeout(() => 
        dispatch(
          fetchProducts({
            category: category,
            limit: 15,
            skip: pageNumber * 15,
          })
        )
    , 900);
    dispatch(setLoading(false));
    }
  }, [inView, loading]);

  return <div ref={ref}>{loading && <Loading />}</div>;
};

export default InfiniteScroll;
