import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';

import image from '../../assets/imgs/icon.png';

const headerStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(2),
		lineHeight: '1',
		background: '#2d333b',
		zIndex: 40,
		color: 'white',
		alignItems: 'center'
	},
	logo: {
		paddingRight: theme.spacing(2)
	},
	menuItems: {
		display: 'flex',
		justifyContent: 'column',
		alignItems: 'center',
		
	},
	search: {
		background: '#1c2128',
		border: '1px solid #444c56',
		borderRadius: 6,
		minHeight: 28,
		padding: theme.spacing(.5),
		paddingLeft: theme.spacing(1),
		minWidth: 250
	},
	links: {
		paddingLeft: theme.spacing(2)
	},
	link: {
		color: '#cdd9e5',
		fontWeight: 600,
		textDecoration: 'none',
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1)
	}
}));


export const Header = () => {
	const styles = headerStyles();

	return (
		<header className={styles.root}>
			<div className={styles.logo}>
				<Link to="/">
					<img src={image} alt="Runetopic logo" />
				</Link>
			</div>
			<div className={styles.menuItems}>
				<input
					className={ styles.search }
					placeholder="Search or jump to..."
					type="search"
				/>
				<div className={ styles.links }>
					<Link className={ styles.link } to="/recent-topics/">Recent Topics</Link>
					<Link className={ styles.link } to="/tools/">Tools</Link>
					<Link className={ styles.link } to="/explore/">Explore</Link>
				</div>
			</div>
		</header>
	)
}

export default Header;