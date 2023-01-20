import useHttp from '../hooks/useHttp';

const _jikanAllMangaUrlBase = 'https://api.jikan.moe/v4/manga'

const useJikanService = () => {
    const request = useHttp();

    const getAllManga = async (newPageNumber = 1) => {

        const res = await request(`${_jikanAllMangaUrlBase}?limit=20&page=${newPageNumber}`);
        return {
            mangaData: res.data.map((manga) => {
                return _transformAllManga(manga);
            }),
            paginationData: _transformPagination(res.pagination),
        };
    };

    const _transformAllManga = (manga) => {
        return {
            id: manga.mal_id,
            name: manga.title,
            thumbnail: manga.images.webp.large_image_url,
            publicationPeriod:
                manga.published.prop.from.year +
                ' - ' +
                (manga.published.prop.to.year || '...'),
        };
    };

    const _transformPagination = (pagination) => {
            return {
                lastVisiblePage: pagination.last_visible_page,
                hasNextPage: pagination.has_next_page,
                currentPage: pagination.current_page,
                totalItems: pagination.items.total,
            }
        }

    return { getAllManga };
};

export default useJikanService;
