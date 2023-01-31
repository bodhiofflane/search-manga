import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import jikanService from '../services/jikanService';

const initialState = {
    randomManga: {},
    loadingStatus: 'waiting',
};

export const fetchRandom = createAsyncThunk('random/fetchRandom', () => {
    const {getRandomManga} = jikanService();
    return getRandomManga();
});

const randomSlice = createSlice({
    name: 'random',
    initialState,
    reducers: {
        clearingRandomState: (state) => {
            state.randomManga = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandom.pending, (state) => {
                state.loadingStatus = 'loading';
            })
            .addCase(fetchRandom.fulfilled, (state, action) => {
                state.randomManga = action.payload;
                state.loadingStatus = 'waiting';
            })
            .addCase(fetchRandom.rejected, (state) => {
                state.loadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

const {actions, reducer} = randomSlice;

export const {clearingRandomState} = actions;

export default reducer;
