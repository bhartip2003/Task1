import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setLoading } from "../store/reducers/product";
import {
  loadingSelector,
  productSelector,
} from "../store/selectors/productSelector";
import {
  limitSelector,
  skipSelector,
} from "../store/selectors/paginationSelector";
import Loading from "./Loading";
import { useSearchParams } from "react-router-dom";
import { setPagination } from "../store/reducers/pagination";

const InfiniteScroll = ({ category }) => {
  const { ref, inView } = useInView({ threshold: 1 });
  const dispatch = useDispatch();
  const limit = useSelector(limitSelector);
  const skip = useSelector(skipSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const productData = useSelector(productSelector);
  const loading = useSelector(loadingSelector);

  const pageNumber = Math.ceil(productData.length / 15);

  useEffect(() => {
    setSearchParams({ limit, skip });
  }, [limit, skip]);

  useEffect(() => {
    if (inView && !loading && pageNumber) {
      dispatch(setLoading(true));
      const timeoutId = setTimeout(() => {
        const newSkip = pageNumber * 15;
        dispatch(setPagination({ limit: limit, skip: newSkip }));
        dispatch(
          fetchProducts({
            category: category,
            limit: 15,
            skip: newSkip,
          })
        );
        dispatch(setLoading(false));
        return () => clearTimeout(timeoutId);
      }, 900);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      {!loading && !productData.length ? (
        <p>No data to load.</p>
      ) : null}
      {loading ? <Loading />:null}
    </div>
  );
};

export default InfiniteScroll;
