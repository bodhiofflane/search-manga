import { useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchManga } from '../reducers/mangaSlice';

import MangaListItem from './MangaListItem';

import { Grid } from '@mui/material';

const MangaList = () => {
    const allManga = useSelector((state) => state.manga.manga);
    const status = useSelector((state) => state.manga.status);
    const currentPage = useSelector(state => state.manga.currentPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchManga(currentPage));
    }, [dispatch, currentPage]);

    console.log(currentPage);

    const renderMangaList = useMemo(() => {
        return allManga.map((manga) => {
                return (
                <Grid sx={{alignSelf: 'stretch'}} key={manga.id} item xs={6} md={3}>
                    <MangaListItem {...manga}/>
                </Grid>
                )
        });
    }, [allManga]);

    if (status === 'loading') {
        return <h1>Loading</h1>;
    }

    return (
        <Grid container spacing={3} sx={{alignItems: 'start'}}>
            {renderMangaList}
        </Grid>
    );
};

export default MangaList;
