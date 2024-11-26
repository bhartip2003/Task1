import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "./reducers/stocks";
import companyReducer from "./reducers/company";
import incomeReducer from "./reducers/income";
import categoryReducer from "./reducers/category";
import productReducer from "./reducers/product";

const store = configureStore({
    reducer: {
        stocks: stocksReducer,
        company: companyReducer,
        income: incomeReducer,
        category: categoryReducer,
        product: productReducer,
    },
    
})

export default store;