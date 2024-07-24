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
    Link
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder"
import { Link as RouterLink} from 'react-router-dom';
import { useStyles } from "./pricingStyles";

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
    </>)
};


export default Pricing;