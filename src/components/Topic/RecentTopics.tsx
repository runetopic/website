import {
    Box, Chip, CircularProgress,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { getAllTopicsRequest, Topic } from '../../service/TopicService';
import theme from '../../theme';

const RecentTopicCard = styled(Link)({
    backgroundColor: '#22272e',
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#444c56',
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '50%',
});

interface ChipData {
    key: number;
    label: string;
}

const ListItem = styled('li')({
    margin: theme.spacing(0.5),
});

const Tags = () => {
    const [chipData] = useState<readonly ChipData[]>([
        { key: 0, label: 'Tools' },
        { key: 1, label: 'OSRS' },
        { key: 2, label: 'RS3' },
    ]);

    return (
        <Box
            sx={ {
                display: 'flex',
                justifyContent: 'start',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
            } }
            component="ul"
        >
            { chipData.map((data) => {
                return (
                    <ListItem key={ data.key }>
                        <Chip
                            label={ data.label }
                        />
                    </ListItem>
                );
            }) }
        </Box>
    );
};

const RecentTopics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllTopicsRequest().then((response) => response.json()).then((data) => {
            setTopics(data);
            setLoaded(true);
        });
    });

    const recentTopics = topics.map((topic: Topic) => {
        return (
            <RecentTopicCard to={ `/topics/view/${topic.id}` }>
                <h3>{ topic.title }</h3>
                <p>{ topic.description }</p>
                <Tags />
            </RecentTopicCard>
        );
    });

    return (
        <Box
            sx={ {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                padding: 2,
            } }
        >
            <h1>Recent Topics</h1>
            <Box sx={ {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: theme.spacing(2),
            } }
            >
                <h3>Popular tags: </h3>
                <Tags />
            </Box>
            <Box sx={ {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
            } }
            >
                { !isLoaded && <CircularProgress /> }
                {
                    isLoaded && recentTopics.length > 0 && recentTopics
                }
            </Box>
        </Box>
    );
};

export default RecentTopics;
