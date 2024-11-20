import { createSelector } from "@reduxjs/toolkit";

export const stocksStore = (store) => store.stocks;

export const gainersSelector = createSelector(
    stocksStore,
    (stocks) => stocks.topGainers
);

export const losersSelector = createSelector(
    stocksStore,
    (stocks) => stocks.topLosers
)

export const loadingSelector = createSelector(
    stocksStore,
    (stocks) => stocks.loading
)

export const errorSelector = createSelector(
    stocksStore,
    (stocks) => stocks.error
)