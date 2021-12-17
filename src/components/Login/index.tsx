import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box, Button, Paper, TextField,
} from '@mui/material';
import { authenticateRequest } from './loginSlice';
import { useAppDispatch } from '../../hooks/hooks';

const Login = () => {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        dispatch(authenticateRequest({ username, password }));
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
                component={ Paper }
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#2d333b',
                    padding: 2,
                    marginBottom: 2,
                } }
            >
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
        </Box>
    );
};

export default Login;
