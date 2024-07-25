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
    Box,
    Link,
    CardHeader
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder"
import { Link as RouterLink} from 'react-router-dom';
import { useStyles } from "./pricingStyles";
import Footer from "./Footer";

const tiers = [{
    title: 'Free',
    price: '0',
    description: [
        '10 users included',
        '2 GB of storage',
        'Help Center access',
        'Email Support'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
}, {
    title: 'Pro',
    price: '15',
    description: [
        '20 users included',
        '10 GB of storage',
        'Help Center access',
        'Priority Email Support'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'contained'
}, {
    title: 'Enterprise',
    price: '30',
    description: [
        '50 users included',
        '30 GB of storage',
        'Help Center access',
        'Phone and Email Support'
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
}
];

const footers = [{
    title: 'Company',
    description: ['Team', 'Histpry', 'Contact us', " Locations"]
}, {
    title: 'Features',
    description: ['Some Cool Stuff', 'Some Random Feature', 'Team Feature', " Developer Stuff", "Another one"]
},{
    title: 'Resources',
    description: ['Some Resource', ' Resource Name', 'Another Resource', "Final Resource"]
}, {
    title: 'Legal',
    description: ['Privacy Policy', 'Terms of use']
}
];

const Pricing = () => {
    const classes = useStyles();

    return(<>
        <Container maxWidth='sm' component="main" className={classes.heroContent}>
            <Typography
                component='h1'
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                Pricing
            </Typography>
            <Typography>
                We need an attractive pricing table for your potential customers
                this layout is built with default Material UI components with a little 
                bit of customisations
            </Typography>
        </Container>
        <Container>
            <Grid container spacing={5} alignItems="flex-end">
                { tiers.map(tier => {
                    <Grid
                    item
                    key={tier.title}
                    xs={12}
                    sm={tier.title === "Enterprise" ? 12 : 6}
                    md={4}
                >
                    <Card>
                        <CardHeader
                            title={tier.title}
                            subheader={tier.subheader}
                            titleTypographyProps={{align: "center"}}
                            action={tier.title === 'Pro' ? <StarIcon /> : null}
                            className={classes.CardHeader}
                        />
                        <CardContent>
                            <div className={classes.cardPricing}>
                                <Typography variant="h3" component="h2" color="textPrimary">
                                    ${tier.price}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    ${tier.price}
                                </Typography>
                            </div>
                            <ul>
                                {
                                    tier.description.map((line) => {
                                        <Typography 
                                            key={line}
                                            component='li'
                                            variant="subtitle1"
                                            align="center"
                                        >
                                            {line}
                                        </Typography>
                                    })
                                }
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button 
                                component={RouterLink}
                                to="/auth/signup"
                                fullWidth
                                color="primary"
                            >
                                {tier.buttonText}
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                })}
                
            </Grid>
        </Container>
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justifyContent="space-evenly">
            {
                footers.map(footer => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {
                                footer.description.map(item => (
                                    <li key={item}>
                                        <Link href="#" variant="subtitle" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </Grid>
                ))
            }
            </Grid>
            <Footer />
        </Container>
    </>)
};


export default Pricing;