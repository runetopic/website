import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Box, Button, Paper, TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchRegisterUser } from '../../service/AuthService';

const Register = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        fetchRegisterUser({
            username,
            email,
            password,
            dateOfBirth: '',
            // eslint-disable-next-line no-console
        }).then((response) => {
            if (response.status === 201) {
                history.push('/login');
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
                fontSize={ 24 }
                component="h2"
            >
                Create a free account below.
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
                    id="register-form"
                    component="form"
                    autoComplete="off"
                    onSubmit={ handleSubmit }
                    sx={ {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: '#2d333b',
                        padding: 2,
                        marginBottom: 2,
                        borderRadius: 2,
                    } }
                >
                    <TextField
                        id="username"
                        label="Username"
                        type="text"
                        onChange={ (e) => setUsername(e.target.value) }
                        value={ username }
                        sx={ { marginBottom: 2 } }
                    />
                    <TextField
                        id="email"
                        label="Email Address"
                        onChange={ (e) => setEmail(e.target.value) }
                        value={ email }
                        type="email"
                        sx={ { marginBottom: 2 } }
                    />
                    <TextField
                        id="password"
                        label="Password"
                        onChange={ (e) => setPassword(e.target.value) }
                        value={ password }
                        type="password"
                        sx={ { marginBottom: 2 } }
                    />
                    <TextField
                        id="confirm-password"
                        label="Confirm Password"
                        autoComplete="off"
                        type="password"
                        sx={ { marginBottom: 2 } }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                        value={ confirmPassword }
                    />
                    <Button sx={ { marginBottom: 2 } } type="submit" fullWidth color="success" variant="contained">
                        Create Account
                    </Button>
                    <Button fullWidth color="primary" variant="contained">
                        Register with discord
                    </Button>
                </Box>
                <Box component={ Link } sx={ { color: 'text.primary', textDecoration: 'underline' } } to="/login">
                    Already have an account?
                </Box>
            </Box>
        </Box>
    );
};

export default Register;
