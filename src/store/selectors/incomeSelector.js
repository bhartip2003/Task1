import { createSelector } from "@reduxjs/toolkit";

export const incomeStore = (store) => store.income;

export const incomeSelector = createSelector(
    incomeStore,
    (income) => income.incomeStatement
);

export const loadingSelector = createSelector(
    incomeStore,
    (income) => income.loading
);

export const errorSelector = createSelector(
    incomeStore,
    (income) => income.error
);