import { createSelector } from "@reduxjs/toolkit";

export const companyStore = (store) => store.company;

export const companySelector = createSelector(
    companyStore,
    (company) => company.companyOverview
);

export const LoadingSelector = createSelector(
    companyStore,
    (company) => company.loading
);

export const errorSelector = createSelector(
    companyStore,
    (company) => company.error
);