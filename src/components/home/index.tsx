import { Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

const homePageStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minHeight: '100vh',
	},
	sidePanel: {
		minWidth: 250,
		background: '#22272e',
		borderRight: '1px solid #444c56',
		padding: theme.spacing(2),
	},
	details: {
		borderBottom: '1px solid #444c56',
		fontWeight: 600,
		padding: theme.spacing(2)
	},
	profileImg: {
		borderRadius: '50%'
	},
	username: {
		marginLeft: theme.spacing(1)
	},
	menu: {
		display: 'flex',
		flexDirection: 'column',
	},
	menuItem: {
		width: '100%'
	},
	link: {
		textDecoration: 'none'
	},
	content: {
		padding: theme.spacing(2),
		width: '66%'
	},
	topic: {
		backgroundColor: '#22272e',
		borderWidth: 1,
		borderRadius: 6,
		borderStyle: 'solid',
		borderColor: '#444c56',
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	divider: {
		borderBottom: '1px solid #444c56',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	heading: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	addNewButton: {
		height: 28,
		width: 70,
		background: '#347d39',
		color: 'white',
	}
}));


const HomePage = () => {
	const styles = homePageStyles();

	const sideBar = (
		<aside className={styles.sidePanel}>
			<details className={styles.details}>
				<summary>
					<img
						src="https://avatars.githubusercontent.com/u/11916106?s=40&amp;v=4"
						alt="@tyler27"
						height="20"
						width="20"
						data-view-component="true"
						className={styles.profileImg} />
					<span className={styles.username}>tyler27</span>
				</summary>
				<div className={styles.menu}>
					<div className={styles.menuItem}>My first topic...please don't hate me</div>
					<div className={styles.menuItem}>Runetopic cache providers</div>
				</div>
			</details>
		</aside>
	);

	return (
		<div className={styles.root}>
			{ sideBar }

			<div className={styles.content}>
				<div className={styles.heading}>
					<h2>Featured Topics</h2>
					<Link to="/topic/new" style={ { textDecoration: 'none' }}>
						<Button className={styles.addNewButton} variant="contained">New</Button>
					</Link>
				</div>


				<div className={styles.topic}>
					<h3>BFS Pathfinding</h3>
					<p>Breadth first search pathfinding implementation.</p>
				</div>

				<div className={styles.divider} />

				<div className={styles.topic}>
					<h3>Runetopic Cache Providers</h3>
					<p>Documentation on the runetopic cache providers and how to use them.</p>
				</div>

				<div className={styles.divider} />

				<div className={styles.topic}>
					<h3>How-to: Implement docker into your RSPS</h3>
					<p>In depth docker tutorial to help you containerize your RSPS.</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;


