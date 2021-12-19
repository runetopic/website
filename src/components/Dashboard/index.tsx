import Sidebar from './Sidebar';
import Page from '../Shared/UI/Page';
import PageContent from '../Shared/UI/PageContent';
import FeaturedTopics from '../Topic/FeaturedTopics';
import { useAppSelector } from '../../hooks/hooks';

const Dashboard = () => {
    const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);

    return (
        <Page>
            { isAuthenticated && <Sidebar /> }

            <PageContent width="60%">
                <FeaturedTopics />
            </PageContent>
        </Page>
    );
};

export default Dashboard;
