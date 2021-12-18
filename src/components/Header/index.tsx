import { Link } from 'react-router-dom';

import image from '../../assets/imgs/icon.png';
import StyledHeader from './StyledHeader';
import StyledLogo from './StyledLogo';
import SearchInput from '../Shared/Form/SearchInput';
import { NavigationLinks, NavigationLink } from './Navigation';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                <Link to="/">
                    <img src={ image } alt="Runetopic logo" />
                </Link>
            </StyledLogo>
            <SearchInput />
            <NavigationLinks>
                <NavigationLink to="tools">Tools</NavigationLink>
                <NavigationLink to="recent-topics">Recent Topics</NavigationLink>
                <NavigationLink to="explore">Explore</NavigationLink>
            </NavigationLinks>
        </StyledHeader>
    );
};

export default Header;
