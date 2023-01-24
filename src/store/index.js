import {configureStore} from "@reduxjs/toolkit";

import manga from "../reducers/mangaSlice";
import oneManga from "../reducers/oneMangaSlice";

const store = configureStore({
    reducer: {manga, oneManga},
    middleware: (middleware) => middleware(),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
