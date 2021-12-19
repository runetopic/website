import { Box, Paper } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import { getTopicRequest, TopicRequest } from '../../service/TopicService';

interface Topic extends TopicRequest {
    id: string;
}

// eslint-disable-next-line react/prop-types
const ViewTopic = () => {
    const [topic, setTopic] = useState({ } as Topic);
    const ref = useRef();
    const params = useParams() as { uuid: string; };

    const scrollToHash = () => {
        const hash = window.location.hash.substring(1);

        if (hash && hash.length) {
            const el = document.getElementById(hash);
            if (el != null) {
                el.scrollIntoView();
            }
        }
    };

    useEffect(() => {
        getTopicRequest(params.uuid).then(async (response) => response.json()).then((data) => {
            setTopic(data);
            scrollToHash();
        });
    }, [params.uuid]);

    if (topic && params.uuid) {
        return (
            <Box
                ref={ ref }
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
