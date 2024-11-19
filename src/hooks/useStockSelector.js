import { useSelector } from "react-redux";

export const useStockSelector = () => {
    const topGainers = useSelector((state) => state.stocks.topGainers);
    const topLosers = useSelector((state) => state.stocks.topLosers);
    const loading = useSelector((state) => state.stocks.loading);
    const error = useSelector((state) => state.stocks.error);

    return {
        topGainers,
        topLosers,
        loading,
        error
    };
};