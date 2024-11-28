import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/reducers/product";
import {
  loadingSelector,
  productSelector,
} from "../../store/selectors/productSelector";
import {
  currentPageSelector,
  limitSelector,
  skipSelector,
} from "../../store/selectors/paginationSelector";
import Loading from "../coreComponents/Loading";
import { setPagination } from "../../store/reducers/pagination";

const InfiniteScroll = ({ category }) => {
  const { ref, inView } = useInView({ threshold: 1 });
  const dispatch = useDispatch();
  const limit = useSelector(limitSelector);
  const skip = useSelector(skipSelector);
  const currPage = useSelector(currentPageSelector);
  const productData = useSelector(productSelector);
  const loading = useSelector(loadingSelector);

  console.log("category in infinite scroll", category);
  useEffect(() => {
    if (inView && !loading && skip < productData.length) {
      const timeoutId = setTimeout(() => {
        const newSkip = currPage * limit;
        const newPage = currPage + 1;
        dispatch(setPagination({ limit: limit, skip: newSkip, currPage: newPage}));
        dispatch(
          fetchProducts({
            category: category,
            limit: 15,
            skip: newSkip,
          })
        );
        return () => clearTimeout(timeoutId);
      }, 500);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      {loading ? <Loading />:null}
      {!loading && !productData.length ? (
        <p>No data to load.</p>
      ) : null}
    </div>
  );
};

export default InfiniteScroll;
