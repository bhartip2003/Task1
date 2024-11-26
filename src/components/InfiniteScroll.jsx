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
  const { ref, inView } = useInView({threshold: 1});
  const dispatch = useDispatch();
  const productData = useSelector(productSelector);
  const loading = useSelector(loadingSelector);

  const pageNumber = productData.length / 15;
  useEffect(() => {
    if (inView && !loading) {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(
          fetchProducts({
            category: category,
            limit: 15,
            skip: pageNumber * 15,
          })
        );
        dispatch(setLoading(false));
      }, 900);
    }
  }, [inView, loading]);

  return <div ref={ref}>{loading && <Loading />}</div>;
};

export default InfiniteScroll;
