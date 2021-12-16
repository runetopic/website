import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import {
    Box, Button, FormControl, Paper,
} from '@mui/material';
import { PageContent } from '../Shared';
import Page from '../Shared/UI/Page';
import theme from '../../theme';

const StyledLoginPage = styled(Page)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const StyledLoginBox = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#2d333b',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
});

const Header = styled('div')({
    marginTop: theme.spacing(2),
    fontSize: 24,
});

const StyledInput = styled('input')({
    borderRadius: 6,
    height: 28,
});

const StyledLink = styled(Link)`
    text-decoration: none;
    color: green;
`;

const Login = () => {
    return (
        <StyledLoginPage>
            <Header>
                Login to runetopic
            </Header>
            <PageContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#2d333b',
                    padding: theme.spacing(2),
                    marginBottom: theme.spacing(2),
                }}
                >
                    <FormControl sx={{ marginBottom: theme.spacing(2), borderRadius: 6 }}>
                        <StyledInput type="email" placeholder="Email" />
                    </FormControl>
                    <FormControl sx={{ marginBottom: theme.spacing(2) }}>
                        <StyledInput type="password" placeholder="Password" />
                    </FormControl>
                    <FormControl fullWidth>
                        <Button color="success" variant="contained">
                            Login
                        </Button>
                    </FormControl>
                </Box>
                <StyledLoginBox>
                    <StyledLink to="register">Create an account</StyledLink>
                </StyledLoginBox>
            </PageContent>
        </StyledLoginPage>
    );
};

export default Login;
