import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import jikanService from '../services/jikanService';

const initialState = {
    manga: [],
    loadingStatus: 'waiting',
    currentPage: 1, // Pagination starts from the first page.
    lastVisiblePage: 0,
    totalItems: 0,
    sortBy: '', // Such application terms.
    dateRange: [],
    filterByType: '',
    sfw: false,
    mangaStatus: '',
    searchTerm: '',
};

export const fetchManga = createAsyncThunk(
    'manga/fetchManga',
    ({currentPage, sortBy, dateRange, filterByType, sfw, mangaStatus, searchTerm}) => {
        const {getAllManga} = jikanService();
        return getAllManga(
            currentPage,
            sortBy,
            dateRange,
            filterByType,
            sfw,
            mangaStatus,
            searchTerm,
        );
    }
);

const mangaSlice = createSlice({
    name: 'manga',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setDateRange: (state, action) => {
            state.dateRange = action.payload;
        },
        setFilterByType: (state, action) => {
            state.filterByType = action.payload;
        },
        setSfw: (state) => {
            state.sfw = !state.sfw;
        },
        setMangaStatus: (state, action) => {
            state.mangaStatus = action.payload;
            state.dateRange = [];
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
        ,
        resetFilters: (state) => {
            state.manga = [];
            state.loadingStatus = 'waiting';
            state.currentPage = 1;
            state.lastVisiblePage = 0;
            state.totalItems = 0;
            state.sortBy = '';
            state.dateRange = [];
            state.filterByType = '';
            state.sfw = false;
            state.mangaStatus = '';
            state.searchTerm = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchManga.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchManga.fulfilled, (state, action) => {
                state.manga = action.payload.mangaData;
                state.currentPage = action.payload.paginationData.currentPage;
                state.lastVisiblePage =
                    action.payload.paginationData.lastVisiblePage;
                state.totalItems = action.payload.paginationData.totalItems;
                state.loadingStatus = 'waiting';
            })
            .addCase(fetchManga.rejected, (state) => {
                state.loadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const {actions, reducer} = mangaSlice;

export const {
    setCurrentPage,
    setSortBy,
    setDateRange,
    setFilterByType,
    setSfw,
    setMangaStatus,
    setSearchTerm,
    resetFilters,
} = actions;

export default reducer;
