import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	root: {
		padding: 8,
		width: 200,
		margin: theme.spacing(2)
	},
}));

const ProjectCard = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQCOrMFUU9fOnj9lx616dZdBk8yrc4-K79DLHxtuaVJWhP1cr-5"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Xlite 2.0
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Xlite 2.0 is an open source RSPS built in kotlin around the 647 revision.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					View Project
				</Button>
			</CardActions>
		</Card>
	);
}

export default ProjectCard;