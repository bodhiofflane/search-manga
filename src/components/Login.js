import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Button
                disabled
                onClick={() => {}}
                sx={{my: 2, color: 'white', display: 'block'}}
            >
                Log In
            </Button>
            <Button
                disabled
                onClick={() => {}}
                sx={{my: 2, color: 'white', display: 'block'}}
            >
                Registry
            </Button>
        </Box>
    );
};

export default Login;
