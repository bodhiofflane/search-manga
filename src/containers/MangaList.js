import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import MangaListItem from '../components/MangaListItem';


import { Grid, Box, CircularProgress } from '@mui/material';

const MangaList = () => {

    const allManga = useSelector((state) => state.manga.manga);
    const loadingStatus = useSelector((state) => state.manga.loadingStatus);



    // Просто что бы был мемоизированный массив.
    const renderMangaList = useMemo(() => {
        return allManga.map((manga) => {
            return (
                <Grid
                    xs={6}
                    md={3}
                    sx={{ alignSelf: 'stretch' }}
                    key={manga.id}
                    item
                >
                    <MangaListItem {...manga} />
                </Grid>
            );
        });
    }, [allManga]);

    if (loadingStatus === 'loading') {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Grid container spacing={3} sx={{ alignItems: 'start' }}>
            {renderMangaList}
        </Grid>
    );
};

export default MangaList;
