import {Box, Container, Typography} from '@mui/material';
import {Helmet} from 'react-helmet';

const About = () => {
    return (
        <Box
            sx={{
                mt: '60px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Helmet>
                <meta
                    name="discription"
                    content="About"
                />
                <title>About</title>
            </Helmet>

            <Container>
                <Typography
                    textAlign={'center'}
                    mb={'30px'}
                >
                    Использую Mui + React + Redux + React-Redux и некоторые
                    сторонии библиотеки, такие как React-router-dom, Formik и
                    т.д.
                </Typography>
                <Typography
                    sx={{display: 'block', textAlign: 'center'}}
                    mb={'30px'}
                    component={'a'}
                    href={'https://github.com/bodhiofflane'}
                >
                    Ссылка на Github
                </Typography>
            </Container>
        </Box>
    );
};

export default About;
