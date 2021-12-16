import Sidebar from "./Sidebar";
import Page from "../Shared/UI/Page";
import PageContent from "../Shared/UI/PageContent";
import FeaturedTopics from "../Topic/FeaturedTopics";

const Dashboard = () => {
	return (
		<Page>
			<Sidebar />

			<PageContent>
				<FeaturedTopics/>
			</PageContent>
		</Page>
	);
};

export default Dashboard;


