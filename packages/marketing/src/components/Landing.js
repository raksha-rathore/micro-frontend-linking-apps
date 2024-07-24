import React from "react";
import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Grid, 
    Typography, 
    Container,
    MaterialLink
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useStyles } from "./styles";


const cards = [1,2,3,4,5,6,7,8,9];

const Album = () => {
    const classes = useStyles();
    return <>
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component='h1'
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        Home Page
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        Something about the collections, a series of related sentences developing a central idea, called the topic. 
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Link to="/pricing">
                                    <Button variant="contained" color="primary">
                                        pricing
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/pricing">
                                    <Button variant="contained" color="primary">
                                        pricing
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {
                        cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image Title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This section may be used to describe the content
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>

            </Container>
        </main>
    </>
}

export default Album;
