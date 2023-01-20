import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import useJikanService from '../services/useJikanService';

const initialState = {
    manga: [],
    loadingStatus: 'waiting',
    currentPage: 1, // Pagination starts from the first page.
    lastVisiblePage: 0,
    totalItems: 0,
}

export const fetchManga = createAsyncThunk(
    'manga/fetchManga',
    (pageNumber) => {
        const {getAllManga} = useJikanService()
        return getAllManga(pageNumber);
    }
);

const mangaSlice = createSlice({
    name: 'manga',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchManga.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchManga.fulfilled, (state, action) => {
                state.manga = action.payload.mangaData;
                state.currentPage = action.payload.paginationData.currentPage;
                state.lastVisiblePage = action.payload.paginationData.lastVisiblePage;
                state.totalItems = action.payload.paginationData.totalItems;
                state.loadingStatus = 'waiting';
            })
            .addCase(fetchManga.rejected, (state) => {
                state.loadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    }
});

const {actions, reducer} = mangaSlice;

export const {setCurrentPage} = actions;

export default reducer;