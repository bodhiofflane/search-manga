export const _transformAllManga = (manga) => {
    return {
        id: manga.mal_id,
        name: manga.title,
        thumbnail: manga.images.webp.large_image_url,
        publicationPeriod:
            (manga.published.prop.from.year || 'Date unknown') +
            ' - ' +
            (manga.published.prop.to.year || '...'),
    };
};

export const _transformPagination = (pagination) => {
    return {
        lastVisiblePage: pagination.last_visible_page,
        hasNextPage: pagination.has_next_page,
        currentPage: pagination.current_page,
        totalItems: pagination.items.total,
    };
};