import { createSelector } from '@reduxjs/toolkit';

export const getOneMangaFromState = createSelector(
    (state) => state.oneManga.oneManga,
    (oneManga) => oneManga
);