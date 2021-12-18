import { Box } from '@mui/material';

const Navigation = ({ children } : any) => {
    return (
        <Box
            component="div"
            sx={ {
                display: 'flex',
                justifyContent: 'column',
                alignItems: 'baseline',
            } }
        >
            { children }
        </Box>
    );
};

export default Navigation;
