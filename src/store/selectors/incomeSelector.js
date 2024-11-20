import { createSelector } from "@reduxjs/toolkit";

export const incomeStore = (store) => store.income;

export const incomeSelector = createSelector(
    incomeStore,
    (company) => company.incomeStatement
);

export const loadingSelector = createSelector(
    incomeStore,
    (company) => company.loading
);

export const errorSelector = createSelector(
    incomeStore,
    (company) => company.error
);