import styles from './latestTopics.module.scss';

const topics = [
	{
		title: '_jordan finally finishes region system',
		views: 100,
		likes: 100,
		dislikes: 100
	},
	{
		title: '_jordan finally finishes region system',
		views: 100,
		likes: 100,
		dislikes: 100
	},
	{
		title: '_jordan finally finishes region system',
		views: 100,
		likes: 100,
		dislikes: 100
	}
]

interface ITopic {
	title: String;
	views: Number,
	likes: Number,
	dislikes: Number;
};

const Topic = (props: ITopic) => {
	return (
		<div>
			<div>Title: {props.title}</div>
			<div>Views: {props.views}</div>
			<div>Likes: {props.likes}</div>
			<div>Dislikes: {props.dislikes}</div>
		</div>
	);
}

const LatestTopics = () => {
	return (
		<div className={ styles.container }>
			<h3>Latest Topics</h3>
			<hr />
			{ topics.map((topic) => <Topic { ...topic } />) }
		</div>
	);
};

export default LatestTopics;