import { styled } from '@mui/material';
import theme from '../../../theme';

const StyledDetails = styled('details')({
    borderBottom: '1px solid #444c56',
    fontWeight: 600,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
});

export default StyledDetails;
