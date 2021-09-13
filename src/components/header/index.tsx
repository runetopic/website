import { Link } from 'react-router-dom';
import RuneTopicLogo from '../../assets/svgs/logo';

import styles from './header.module.scss';

const Header = () => {
	return (
		<div className={ styles.container }>
			<RuneTopicLogo />
			<div className={ styles.navLinks }>
				<Link to="/" className={ styles.link }>Home</Link>
				<Link to="/topics" className={ styles.link }>Topics</Link>
				<Link to="/projects" className={ styles.link }>Projects</Link>
				{/* <Link to="/profile" className={ styles.link }>Profile</Link> */}
			</div>
		</div>
	);
};

export default Header;