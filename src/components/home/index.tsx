import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const homePageStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
	},
	info: {
		margin: theme.spacing(2),
		borderTop: '25px solid #3f51b5',
		borderRadius: 3,
		borderRight: '1px solid black',
		borderLeft: '1px solid black',
		borderBottom: '1px solid black',
		padding: theme.spacing(2),
	}
}));

const HomePage = () => {
	const styles = homePageStyles();

	return (
		<div className={styles.root}>
			<div className={styles.info}>
				<Typography variant="h4" component="h2" gutterBottom>
					Welcome to RuneTopic
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					The place for open discussion and documentation around the Runescape protocol.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					Ready to get started? Jump right into current topics, or create a project to showcase your work!
				</Typography>
				<Button variant="contained" color="primary">
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default HomePage;