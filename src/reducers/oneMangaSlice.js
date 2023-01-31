import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import jikanService from '../services/jikanService';

const initialState = {
    oneManga: {},
    loadingStatus: 'waiting',
};

export const fetchOneManga = createAsyncThunk(
    'oneManga/fatchOneManga',
    (id) => {
        const {getOneManga} = jikanService();
        return getOneManga(id);
    }
);

const oneMangaSlice = createSlice({
    name: 'oneManga',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchOneManga.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchOneManga.fulfilled, (state, action) => {
                state.oneManga = action.payload;
                state.loadingStatus = 'waiting';
            })
            .addCase(fetchOneManga.rejected, (state) => {
                state.loadingStatus = 'error';
            });
    },
});

const {reducer} = oneMangaSlice;

export default reducer;
