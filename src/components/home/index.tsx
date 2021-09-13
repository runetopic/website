import styles from './home.module.scss';

const InfoBlock = () => {
	return (
		<div>
			<h1>Welcome to RuneTopic</h1>
			<h3>The place for open discussion and documentation around the Runescape protocol.</h3>
		</div>
	);
}

const HomePage = () => {
	return (
		<div className={ styles.home }>
			<div className={ styles.content }>
				<InfoBlock />
			</div>
		</div>
	);
};

export default HomePage;