import {
    Box, Button, Checkbox, FormControlLabel, Paper, TextField,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useNavigate } from 'react-router-dom';
import { Divider } from '../Shared';
import theme from '../../theme';
import { postTopicRequest } from '../../service/TopicService';

const CreateTopic = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isPrivateTopic, setPrivateTopic] = useState(false);
    const [markdown, setMarkDown] = useState('### My Topic!');

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        postTopicRequest({
            title,
            description,
            markdown,
            private: isPrivateTopic,
        }).then(async (response) => response.json()).then((topic: any) => {
            navigate(`/topics/view/${topic.id}`);
        });
    };

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

            <Box
                onSubmit={ handleSubmit }
                component="form"
                sx={ { display: 'flex', flexDirection: 'column', alignSelf: 'center' } }
            >
                <TextField
                    id="title"
                    label="Title"
                    type="username"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                    sx={ { marginBottom: 2, maxWidth: 300 } }
                />

                <TextField
                    label="Description"
                    multiline
                    rows={ 4 }
                    onChange={ (e) => setDescription(e.target.value) }
                    value={ description }
                    sx={ { marginBottom: 2, maxWidth: 500 } }
                />

                <FormControlLabel
                    control={ (
                        <Checkbox
                            checked={ isPrivateTopic }
                            name="private"
                            onChange={ (e) => setPrivateTopic(e.target.checked) }
                        />
                    ) }
                    label="Private topic? (All topics are public by default)"
                />

                <MDEditor
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
                <Divider />
                <Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
                    <Button
                        color="error"
                        variant="contained"
                        sx={ { marginRight: 2 } }
                        onClick={ () => navigate(-1) }
                    >
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" variant="contained">
                        Submit Topic
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default CreateTopic;
