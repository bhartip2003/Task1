import { createSelector } from "@reduxjs/toolkit";

export const formStore = (store) => store.form;

export const formSelector = createSelector(
    formStore,
    (form) => form.isModalOpen
);


