import { Box } from '@mui/material';
import theme from '../../theme';

const StyledHeader = ({ children }: any) => {
    return (
        <Box
            sx={ {
                display: 'flex',
                padding: theme.spacing(2),
                lineHeight: '1',
                background: '#2d333b',
                zIndex: 40,
                color: 'white',
                alignItems: 'center',
            } }
        >
            { children }
        </Box>
    );
};

export default StyledHeader;
