import { SyntheticEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Box, Button, TextField,
} from '@mui/material';
import { useHistory } from 'react-router';
import authService from '../../service/AuthService';

const Login = ({ setAuthenticated }: any) => {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        authService.login({ username, password }).then((result) => {
            if (result && result.token) {
                window.localStorage.setItem('accessToken', result.token);
                setAuthenticated(true);
                history.push('/');
            }
        });
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
        >
            <Box
                marginTop={ 2 }
                marginBottom={ 2 }
                fontSize={ 24 }
            >
                Login to runetopic
            </Box>
            <Box
                component="form"
                onSubmit={ handleSubmit }
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#2d333b',
                    padding: 2,
                    marginBottom: 2,
                } }
            >
                <TextField
                    id="username"
                    label="Email or Username"
                    type="username"
                    onChange={ (e) => setUsername(e.target.value) }
                    value={ username }
                    sx={ { marginBottom: 2 } }
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={ (e) => setPassword(e.target.value) }
                    value={ password }
                    sx={ { marginBottom: 2 } }
                />
                <Button fullWidth type="submit" color="success" variant="contained">
                    Login
                </Button>
            </Box>
            <Box component={ Link } sx={ { color: 'text.primary', textDecoration: 'underline' } } to="/register">
                <span>Don&apos;t have a account?</span>
            </Box>
        </Box>
    );
};

Login.propTypes = {
    setAuthenticated: PropTypes.func.isRequired,
};

export default Login;
