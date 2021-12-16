import {styled} from "@mui/system";
import theme from "../../theme";

export const StyledHeader = styled('header')({
    display: 'flex',
    padding: theme.spacing(2),
    lineHeight: '1',
    background: '#2d333b',
    zIndex: 40,
    color: 'white',
    alignItems: 'center'
});

export default StyledHeader;