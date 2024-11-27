import { createSelector } from "@reduxjs/toolkit";

export const productStore = (store) => store.product;

export const productSelector = createSelector(
    productStore,
    (product) => product.productData
);

export const loadingSelector = createSelector(
    productStore,
    (product) => product.loading
);

export const errorSelector = createSelector(
    productStore,
    (product) => product.error
);