import {useMemo} from 'react';

import {useSelector} from 'react-redux';

import MangaListItem from '../components/MangaListItem';
import SkeletonMangaList from '../components/SkeletonMangaList';

import {Grid} from '@mui/material';

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
                    sx={{alignSelf: 'stretch'}}
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
            <Grid
                container
                spacing={3}
                sx={{alignItems: 'start'}}
            >
                <SkeletonMangaList />
            </Grid>
        );
    }

    return (
        <Grid
            container
            spacing={3}
            sx={{alignItems: 'start'}}
        >
            {renderMangaList}
        </Grid>
    );
};

export default MangaList;
