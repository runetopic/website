import { Typography } from '@mui/material';

const Copyright = (props: any) => (
    <Typography variant="body2" color="text.secondary" align="center" { ...props }>
        Runetopic suite v1.0.0
        { ' ' }
        { new Date().getFullYear() }
    </Typography>
);

export default Copyright;
