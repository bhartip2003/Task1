import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "./reducers/stocks";
import companyReducer from "./reducers/company";
import incomeReducer from "./reducers/income";
import categoryReducer from "./reducers/category";
import productReducer from "./reducers/product";
import paginationReducer from "./reducers/pagination"
import formReducer from "./reducers/form"


const store = configureStore({
    reducer: {
        stocks: stocksReducer,
        company: companyReducer,
        income: incomeReducer,
        category: categoryReducer,
        product: productReducer,
        pagination: paginationReducer,
        form: formReducer,
    },
    
})

export default store;