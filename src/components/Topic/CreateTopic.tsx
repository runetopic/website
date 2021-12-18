import {
    Box, Button, Checkbox, FormControlLabel, Paper, TextField,
} from '@mui/material';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Divider } from '../Shared';
import theme from '../../theme';

const CreateTopic = () => {
    const [markdown, setMarkDown] = useState('### My Topic!');
    return (
        <Box
            sx={ {
                minHeight: '100vh',
                padding: 2,
            } }
        >
            <h1>Create new topic</h1>
            <p>
                A topic should contain useful information that others can easily read and digest.
            </p>

            <Box component="form" sx={ { display: 'flex', flexDirection: 'column', alignSelf: 'center' } }>
                <TextField
                    id="title"
                    label="Title"
                    type="username"
                    sx={ { marginBottom: 2, maxWidth: 300 } }
                />

                <TextField
                    label="Description"
                    multiline
                    rows={ 4 }
                    sx={ { marginBottom: 2, maxWidth: 500 } }
                />

                <FormControlLabel
                    control={
                        <Checkbox checked={ false } name="private" />
                    }
                    label="Private topic? (All topics are public by default)"
                />

                <MDEditor
                    theme="dark"
                    value={ markdown }
                    style={ {
                        background: '#22272e',
                        color: theme.palette.text.primary,
                    } }
                    // @ts-ignore
                    onChange={ setMarkDown }
                />

                <h2>Preview:</h2>

                <Box
                    component={ Paper }
                    sx={ {
                        background: '#22272e',
                        padding: 2,
                        color: theme.palette.text.primary,
                    } }
                >
                    <MDEditor.Markdown
                        source={ markdown }
                    />
                </Box>
            </Box>
            <Divider />
            <Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
                <Button color="error" variant="contained" sx={ { marginRight: 2 } }>
                    Cancel
                </Button>
                <Button color="success" variant="contained">
                    Submit Topic
                </Button>
            </Box>
        </Box>
    );
};

export default CreateTopic;
