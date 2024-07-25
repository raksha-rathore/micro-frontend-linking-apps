import React from 'react';
import { Link as MaterialLink, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom/"



export const useStyles = makeStyles((theme) =>( {
    footer: {
        backgroundColor: theme.palette.background.paper,
        spacing: theme.spacing(6)
    }
}))

export default () => {
    const classes = useStyles();
    
    return <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give footer a purpose
            <Typography variant="body2" color="textSecondary" align="center">
                &copy;
                <MaterialLink component={Link} to='/' color="inherit">
                    The Website
                </MaterialLink>{' '}
                { new Date().getFullYear()}
                {'.'}
            </Typography>
        </Typography>
    </footer>
    
}