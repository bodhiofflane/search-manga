import { configureStore } from '@reduxjs/toolkit';

import mangaSlice from '../reducers/mangaSlice';

const store = configureStore({
    reducer: {manga: mangaSlice},
    middleware: (middleware) => middleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;