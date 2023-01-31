import {configureStore} from "@reduxjs/toolkit";

import manga from "../reducers/mangaSlice";
import oneManga from "../reducers/oneMangaSlice";
import randomManga from '../reducers/randomSlice'

const store = configureStore({
    reducer: {manga, oneManga, randomManga},
    middleware: (middleware) => middleware(),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
