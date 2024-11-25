import { createSelector } from "@reduxjs/toolkit";

export const categoryStore = (store) => store.category;

export const categorySelector = createSelector(
    categoryStore,
    (category) => category.categoryData
);

export const loadingSelector = createSelector(
    categoryStore,
    (category) => category.loading
);

export const errorSelector = createSelector(
    categoryStore,
    (category) => category.error
);