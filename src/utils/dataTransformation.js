export const _transformAllManga = (manga) => {
    return {
        id: manga.mal_id,
        name: manga.title,
        thumbnail: manga.images.webp.large_image_url,
        publicationPeriod:
            (manga.published.prop.from.year || "Date unknown") +
            " - " +
            (manga.published.prop.to.year || "..."),
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

export const _transformOneManga = (manga) => {
    return {
        id: manga.mal_id,
        url: manga.url,
        thumbnail: manga.images.webp.large_image_url,
        title: manga.title,
        type: manga.type,
        chapters: manga.chapters,
        volumes: manga.volumes,
        status: manga.status,
        published: manga.published.string,
        score: manga.score,
        rank: manga.rank,
        members: manga.members,
        favorites: manga.favorites,
        synopsis: manga.synopsis,
        background: manga.background,
        authors: manga.authors.map((item) => ({
            name: item.name,
            id: item.mal_id,
        })),
        genres: manga.genres.map((item) => item.name),
        demographics: manga.demographics,
    };
};
