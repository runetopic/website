import { Box, Paper, styled } from '@mui/material';
import theme from '../../theme';

const StyledToolBox = styled(Paper)({
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
});

const Tools = () => {
    return (
        <Box
            sx={
                {
                    minHeight: '100vh',
                    padding: theme.spacing(2),
                }
            }
        >
            <Box sx={ {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
            } }
            >
                <StyledToolBox>
                    Cache Editor
                </StyledToolBox>
                <StyledToolBox>
                    Type Database
                </StyledToolBox>
                <StyledToolBox>
                    RS Archives
                </StyledToolBox>
            </Box>
        </Box>
    );
};

export default Tools;
