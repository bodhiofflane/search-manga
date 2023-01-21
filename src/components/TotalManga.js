import { Stack, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

const TotalManga = () => {
    const totalItems = useSelector((state) => state.manga.totalItems);

    return (
        <Stack alignItems="center" sx={{my: '10px'}}>
            <Typography color={'text.secondary'}>
                Total {totalItems} pieces
            </Typography>
        </Stack>
    );
};

export default TotalManga;
