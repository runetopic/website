import { Link } from 'react-router-dom';
import {
    Box, Button, Paper, TextField,
} from '@mui/material';

const Login = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box
                marginTop={ 2 }
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
                <TextField
                    id="username"
                    label="Username or Email"
                    type="username"
                    sx={ { marginBottom: 2 } }
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    sx={ { marginBottom: 2 } }
                />
                <Button fullWidth color="success" variant="contained">
                    Login
                </Button>
            </Box>
            <Box component={ Link } sx={ { color: 'text.primary', textDecoration: 'underline' } } to="/register">
                <span>Don&apos;t have a account?</span>
            </Box>
        </Box>
    );
};

export default Login;
