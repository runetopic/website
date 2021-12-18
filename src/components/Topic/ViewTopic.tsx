import { Box, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useMatch } from 'react-router-dom';
import { getTopicRequest, TopicRequest } from '../../service/TopicService';

interface Topic extends TopicRequest {
    uuid: string;
}

// eslint-disable-next-line react/prop-types
const ViewTopic = () => {
    const [topic, setTopic] = useState({ } as Topic);
    const { params: { uuid } }: any = useMatch('/topic/view/:uuid');

    useEffect(() => {
        getTopicRequest(uuid).then(async (response) => response.json()).then((data) => setTopic(data));
    }, [uuid]);

    if (topic && uuid) {
        return (
            <Box
                component={ Paper }
                sx={ {
                    minHeight: '100vh',
                    padding: 2,
                } }
            >
                <MDEditor.Markdown
                    source={ topic.markdown }
                />
            </Box>
        );
    }

    return (
        <Box>
            Sorry couldnt find
        </Box>
    );
};

export default ViewTopic;
