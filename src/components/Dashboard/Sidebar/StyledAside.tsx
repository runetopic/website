import { Box } from '@mui/material';
import theme from '../../../theme';

const StyledAside = ({ children }: any) => {
    return (
        <Box
            component="aside"
            sx={ {
                minWidth: 250,
                background: '#22272e',
                borderRight: '1px solid #444c56',
                padding: theme.spacing(2),
            } }
        >
            { children }
        </Box>
    );
};

export default StyledAside;
