import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "./reducers/stocks";
import companyReducer from "./reducers/company";
import incomeReducer from "./reducers/income";

const store = configureStore({
    reducer: {
        stocks: stocksReducer,
        company: companyReducer,
        income: incomeReducer,
    },
    
})

export default store;