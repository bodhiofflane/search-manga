import axiosRequest from '../api/axiosRequest';

import {
    _transformAllManga,
    _transformPagination,
} from '../utils/dataTransformation';

const _jikanAllMangaUrlBase = 'https://api.jikan.moe/v4/manga';

const jikanService = () => {
    const getAllManga = async (
        newPageNumber = 1,
        sortTerm = 'mal_id',
        dateRange = [1930, 2023],
        filterByType = 'all',
        sfw = false
    ) => {
        const res = await axiosRequest(
            `${_jikanAllMangaUrlBase}?limit=20&page=${newPageNumber}&order_by=${sortTerm}&start_date=${
                dateRange[0]
            }&end_date=${dateRange[1]}&type=${filterByType}${sfw ? '&sfw' : ''}`
        );

        return {
            mangaData: res.data.data.map((manga) => {
                return _transformAllManga(manga);
            }),
            paginationData: _transformPagination(res.data.pagination),
        };
    };

    return { getAllManga };
};

export default jikanService;
