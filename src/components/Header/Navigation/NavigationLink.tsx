import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const NavigationLink = styled(Link)`
    color: #cdd9e5; //TODO make this into a color var from theme
    font-weight: 600;
    text-decoration: none;
    padding-left: ${theme.spacing(2)};
    padding-right: ${theme.spacing(2)};
`;

export default NavigationLink;
