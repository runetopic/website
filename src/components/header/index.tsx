import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RuneTopicLogo from '../../assets/svgs/logo';
import { Link } from 'react-router-dom';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		borderBottom: '1px solid white'
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	logo: {
		flexGrow: 1,
	},
	link: {
		color: 'white',
		textDecoration: 'none',
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<div className={classes.logo}>
						<Link to="/home" className={classes.link}>
							<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
								<RuneTopicLogo />
							</IconButton>
						</Link>
					</div>
					<Link to="/projects" className={classes.link}><Button color="inherit">Projects</Button></Link>
					<Link to="/topics" className={classes.link}><Button color="inherit">Topics</Button></Link>
					<Link to="/login" className={classes.link}><Button color="inherit">Login</Button></Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;