import { Box } from '@mui/material';
import { Divider } from '../Shared';

const CreateTopic = () => {
    return (
        <Box
            sx={ {
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
            } }
        >
            <Box>
                <h1>Create new topic</h1>
                <p>
                    A topic should contain useful information that others can easily read and digest.
                </p>
                <Divider />
            </Box>
        </Box>
    );
};

export default CreateTopic;
