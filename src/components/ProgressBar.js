import {Box, CircularProgress} from '@mui/material';

const ProgressBar = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mt: '70px'}}>
            <CircularProgress
                size={400}
                thickness={1}
            />
        </Box>
    );
};

export default ProgressBar;
