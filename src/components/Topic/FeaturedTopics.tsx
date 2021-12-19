import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import Divider from '../Shared/UI/Divider';
import theme from '../../theme';

const FeaturedTopicCard = styled('div')({
    backgroundColor: '#22272e',
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#444c56',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
});

const Header = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});

const FeaturedTopics = () => {
    return (
        <>
            <Header>
                <h2>Featured Topics</h2>
                <Link to="/topics/new" style={ { textDecoration: 'none' } }>
                    <Button color="primary" variant="contained">New</Button>
                </Link>
            </Header>

            <FeaturedTopicCard>
                <h3>BFS Pathfinding</h3>
                <p>Breadth first search pathfinding implementation.</p>
            </FeaturedTopicCard>

            <Divider />

            <FeaturedTopicCard>
                <h3>BFS Pathfinding</h3>
                <p>Breadth first search pathfinding implementation.</p>
            </FeaturedTopicCard>

            <Divider />
        </>
    );
};

export default FeaturedTopics;
