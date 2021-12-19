import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import image from '../../assets/imgs/icon.png';
import StyledHeader from './StyledHeader';
import StyledLogo from './StyledLogo';
import SearchInput from '../Shared/Form/SearchInput';
import { NavigationLinks, NavigationLink } from './Navigation';
import { useAppSelector } from '../../hooks/hooks';

const Header = () => {
    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

    return (
        <StyledHeader>
            <StyledLogo>
                <Link to="/">
                    <img src={ image } alt="Runetopic logo" />
                </Link>
            </StyledLogo>
            <SearchInput />
            <NavigationLinks>
                <NavigationLink to="/tools">Tools</NavigationLink>
                <NavigationLink to="/topics/recent">Recent Topics</NavigationLink>
                <NavigationLink to="/explore">Explore</NavigationLink>
            </NavigationLinks>
            <NavigationLink to={ isAuthenticated ? '/logout' : '/login' }>
                { isAuthenticated && <LogoutIcon /> }
                { !isAuthenticated && <LoginIcon /> }
            </NavigationLink>
        </StyledHeader>
    );
};

export default Header;
