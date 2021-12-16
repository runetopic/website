import makeStyles from '@mui/styles/makeStyles';

const homePageStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    divider: {
        borderBottom: '1px solid #444c56',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    heading: {},
}));

const CreateTopic = () => {
    const styles = homePageStyles();

    return (
        <div className={styles.root}>
            <div className={styles.heading}>
                <h1>Create new topic</h1>
                <p>
                    A topic should contain useful information that others can easily read and digest.
                </p>
                <div className={styles.divider} />
            </div>
        </div>
    );
};

export default CreateTopic;
