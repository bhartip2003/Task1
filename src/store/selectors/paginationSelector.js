import { createSelector } from "@reduxjs/toolkit";

export const paginationStore = (store) => store.pagination;

export const limitSelector = createSelector(
    paginationStore,
    (pagination) => pagination.limit
);

export const skipSelector = createSelector(
    paginationStore,
    (pagination) => pagination.skip
);

export const currentPageSelector = createSelector(
    paginationStore,
    (pagination) => pagination.currPage
);

export const paginationStateSelector = createSelector(
    paginationStore,
    (pagination) => ({ limit: pagination.limit, skip: pagination.skip, currPage: pagination.currPage })
);

