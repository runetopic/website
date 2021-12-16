import {
    Box, Button, TextField,
} from '@mui/material';

import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event.target["username"].value)// eslint-disable-line
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box
                marginTop={ 2 }
                fontSize={ 24 }
                component="h2"
            >
                Create a free account below.
            </Box>
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
                    sx={ { marginBottom: 2 } }
                />
                <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                    sx={ { marginBottom: 2 } }
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    sx={ { marginBottom: 2 } }
                />
                <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    autoComplete="off"
                    type="password"
                    sx={ { marginBottom: 2 } }
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
    );
};

export default Register;
